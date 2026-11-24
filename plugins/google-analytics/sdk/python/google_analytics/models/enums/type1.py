from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1(str, Enum):
    """The type of this metric."""

    METRIC_TYPE_UNSPECIFIED = "METRIC_TYPE_UNSPECIFIED"
    TYPE_INTEGER = "TYPE_INTEGER"
    TYPE_FLOAT = "TYPE_FLOAT"
    TYPE_SECONDS = "TYPE_SECONDS"
    TYPE_MILLISECONDS = "TYPE_MILLISECONDS"
    TYPE_MINUTES = "TYPE_MINUTES"
    TYPE_HOURS = "TYPE_HOURS"
    TYPE_STANDARD = "TYPE_STANDARD"
    TYPE_CURRENCY = "TYPE_CURRENCY"
    TYPE_FEET = "TYPE_FEET"
    TYPE_MILES = "TYPE_MILES"
    TYPE_METERS = "TYPE_METERS"
    TYPE_KILOMETERS = "TYPE_KILOMETERS"

    __str__ = str.__str__


Type1OrStr: TypeAlias = Annotated[Type1 | str, open_enum_validator(Type1)]
