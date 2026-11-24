from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PoweredByAlignment(str, Enum):
    """Alignment for "powered by" text"""

    LEFT = "left"
    CENTER = "center"
    RIGHT = "right"

    __str__ = str.__str__


PoweredByAlignmentOrStr: TypeAlias = Annotated[PoweredByAlignment | str, open_enum_validator(PoweredByAlignment)]
