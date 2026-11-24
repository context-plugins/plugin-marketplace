from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """The time unit for the expiration value."""

    MINUTES = "MINUTES"
    HOURS = "HOURS"
    DAYS = "DAYS"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
