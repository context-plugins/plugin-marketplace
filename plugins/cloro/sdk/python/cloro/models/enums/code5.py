from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code5(str, Enum):
    """Error code identifying the failure reason."""

    VALIDATION_ERROR = "VALIDATION_ERROR"
    RESOURCE_ALREADY_EXISTS = "RESOURCE_ALREADY_EXISTS"
    INSUFFICIENT_CREDITS = "INSUFFICIENT_CREDITS"
    MODEL_UNAVAILABLE = "MODEL_UNAVAILABLE"

    __str__ = str.__str__


Code5OrStr: TypeAlias = Annotated[Code5 | str, open_enum_validator(Code5)]
