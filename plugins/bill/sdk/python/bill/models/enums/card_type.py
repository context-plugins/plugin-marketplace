from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CardType(str, Enum):
    """CardType."""

    PHYSICAL = "PHYSICAL"
    VIRTUAL_MEMBER = "VIRTUAL_MEMBER"
    VIRTUAL_VENDOR = "VIRTUAL_VENDOR"
    VIRTUAL = "VIRTUAL"

    __str__ = str.__str__


CardTypeOrStr: TypeAlias = Annotated[CardType | str, open_enum_validator(CardType)]
