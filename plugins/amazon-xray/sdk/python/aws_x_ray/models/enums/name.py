from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name(str, Enum):
    """The name of a sampling rule."""

    PARTIAL_SCAN = "PartialScan"
    FIXED_RATE = "FixedRate"

    __str__ = str.__str__


NameOrStr: TypeAlias = Annotated[Name | str, open_enum_validator(Name)]
