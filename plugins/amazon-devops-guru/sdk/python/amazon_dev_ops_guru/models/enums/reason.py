from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Reason(str, Enum):
    """The reason the validation exception was thrown."""

    UNKNOWN_OPERATION = "UNKNOWN_OPERATION"
    CANNOT_PARSE = "CANNOT_PARSE"
    FIELD_VALIDATION_FAILED = "FIELD_VALIDATION_FAILED"
    OTHER = "OTHER"
    INVALID_PARAMETER_COMBINATION = "INVALID_PARAMETER_COMBINATION"
    PARAMETER_INCONSISTENT_WITH_SERVICE_STATE = "PARAMETER_INCONSISTENT_WITH_SERVICE_STATE"

    __str__ = str.__str__


ReasonOrStr: TypeAlias = Annotated[Reason | str, open_enum_validator(Reason)]
