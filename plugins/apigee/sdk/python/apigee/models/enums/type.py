from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """Not used by Apigee."""

    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    TYPE_TRIAL = "TYPE_TRIAL"
    TYPE_PAID = "TYPE_PAID"
    TYPE_INTERNAL = "TYPE_INTERNAL"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
