#!/bin/bash
if [ "$#" -eq 0 ]; then 
	echo "No arguments supplied"
else
	count=0
	for arg in "$@"; do
		if [ "$count" -lt 3 ]; then
		echo "$arg"
		((count++))
		fi
	done
fi

# The number of arguments is always stored inside of the $#
# the $@ variable, which contains all the arguments that were passed