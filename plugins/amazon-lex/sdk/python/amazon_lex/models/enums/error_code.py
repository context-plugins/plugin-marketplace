from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ErrorCode(str, Enum):
    """The unique error code for the failed custom vocabulary item from the custom vocabulary list."""

    DUPLICATE_INPUT = "DUPLICATE_INPUT"
    RESOURCE_DOES_NOT_EXIST = "RESOURCE_DOES_NOT_EXIST"
    RESOURCE_ALREADY_EXISTS = "RESOURCE_ALREADY_EXISTS"
    INTERNAL_SERVER_FAILURE = "INTERNAL_SERVER_FAILURE"

    __str__ = str.__str__


ErrorCodeOrStr: TypeAlias = Annotated[ErrorCode | str, open_enum_validator(ErrorCode)]
