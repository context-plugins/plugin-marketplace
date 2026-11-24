from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code2(str, Enum):
    """Error code identifying the failure reason."""

    VALIDATION_ERROR = "VALIDATION_ERROR"
    RESOURCE_ALREADY_EXISTS = "RESOURCE_ALREADY_EXISTS"
    INSUFFICIENT_CREDITS = "INSUFFICIENT_CREDITS"

    __str__ = str.__str__


Code2OrStr: TypeAlias = Annotated[Code2 | str, open_enum_validator(Code2)]
