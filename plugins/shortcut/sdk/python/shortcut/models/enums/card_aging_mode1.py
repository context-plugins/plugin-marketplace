from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CardAgingMode1(str, Enum):
    """The card aging mode for stories in this Group: "gradual" or "immediate". Null if card aging is off."""

    OFF = "off"
    GRADUAL = "gradual"
    IMMEDIATE = "immediate"

    __str__ = str.__str__


CardAgingMode1OrStr: TypeAlias = Annotated[CardAgingMode1 | str, open_enum_validator(CardAgingMode1)]
