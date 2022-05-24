

from functools import lru_cache
import math

@lru_cache(maxsize=None)
def r_factorial(num):
	"""
	This function returns the factorial of a number using recursion.

	Args:
		num (int): The number to calculate the factorial of.

	Returns:
		int: The factorial of the number.
	"""

	return 1 if num == 0 else num * factorial(num - 1)


def other_factorial(num):
	return math.prod(range(1, num + 1))


def factorial(num):
	"""
	This function returns the factorial of a given number.

	Args:
		num (int): The number to calculate the factorial of.

	Returns:
		int: The factorial of the number.
	"""

	result = 1
	for i in range(2, num + 1):
		result *= i
	return result
