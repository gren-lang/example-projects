browser_examples := \
	counter\
	files\
	flight_booker\
	hello_world\
	temperature_converter\
	timer\
	local_storage\
	todo_mvc

node_examples := \
	cat\
	http-server\
	read_stdin

all_examples := $(browser_examples) $(node_examples)

project_caches := $(foreach project, $(all_examples), $(project)/.gren)


.PHONY: $(all_examples)


all: $(all_examples)
	@echo "Done"

clean:
	rm -r $(project_caches)
	@echo "Done"

$(browser_examples):
	@echo "Compiling $@"
	@cd "./$@/";\
	npx gren make ./src/Main.gren --output=./Example.html

$(node_examples):
	@echo "Compiling $@"
	@cd "./$@/";\
	npx gren make ./src/Main.gren --optimize --output=./app
