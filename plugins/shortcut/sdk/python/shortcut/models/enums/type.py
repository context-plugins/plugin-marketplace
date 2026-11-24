from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """The type of the Key Result (numeric, percent, or boolean)."""

    PERCENT = "percent"
    BOOLEAN = "boolean"
    NUMERIC = "numeric"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
