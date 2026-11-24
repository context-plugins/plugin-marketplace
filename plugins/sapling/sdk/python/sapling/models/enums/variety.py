from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Variety(str, Enum):
    """English variety to enforce, e.g. "us-variety" or "gb-variety". Optional."""

    US_VARIETY = "us-variety"
    GB_VARIETY = "gb-variety"
    AU_VARIETY = "au-variety"
    CA_VARIETY = "ca-variety"
    S_VARIETY = "s-variety"
    T_VARIETY = "t-variety"
    NULL_VARIETY = "null-variety"

    __str__ = str.__str__


VarietyOrStr: TypeAlias = Annotated[Variety | str, open_enum_validator(Variety)]
