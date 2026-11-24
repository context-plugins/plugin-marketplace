from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CardAgingMode(str, Enum):
    """The card aging mode for stories in this Group: "gradual" (fixed fade steps at 1, 2, and 4 weeks), "immediate", or
    "off" (explicitly disabled for this Group). Set to null to inherit the Workspace default."""

    OFF = "off"
    GRADUAL = "gradual"
    IMMEDIATE = "immediate"

    __str__ = str.__str__


CardAgingModeOrStr: TypeAlias = Annotated[CardAgingMode | str, open_enum_validator(CardAgingMode)]
