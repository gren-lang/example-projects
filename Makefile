common_examples := counter\
			files\
			flight_booker\
			hello_world\
			temperature_converter\
			timer\
			local_storage

all_examples := $(common_examples) todo_mvc

project_caches := $(foreach project, $(all_examples), $(project)/.gren)


.PHONY: $(all_examples)


all: $(all_examples)
	@echo "Done"

clean:
	rm -r $(project_caches)
	@echo "Done"

$(common_examples):
	@echo "Compiling $@"
	@cd "./$@/";\
	gren make ./src/Main.gren --output=./Example.html

todo_mvc:
	@echo "Compiling $@"
	@cd "./$@/";\
		gren make ./src/Main.gren --output=./Example.js
