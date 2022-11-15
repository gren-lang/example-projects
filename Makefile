all_examples := counter\
			files\
			hello_world\
			temperature_converter\
			timer\
			local_storage\
			todo_mvc

# flight_booker
project_caches := $(foreach project, $(all_examples), $(project)/.gren)


.PHONY: $(all_examples)


all: $(all_examples)
	@echo "Done"

clean:
	rm -r $(project_caches)
	@echo "Done"

$(all_examples):
	@echo "Compiling $@"
	@cd "./$@/";\
	gren make ./src/Main.gren --output=./Example.html
