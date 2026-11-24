from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Family(str, Enum):
    SANS = "sans"
    SANS_CONDENSED = "sans-condensed"
    SERIF = "serif"
    SERIF_ELEGANT = "serif-elegant"
    MONO = "mono"

    __str__ = str.__str__


FamilyOrStr: TypeAlias = Annotated[Family | str, open_enum_validator(Family)]
