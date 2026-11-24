from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CardUserStatus(str, Enum):
    """Card user status"""

    VERIFIED = "VERIFIED"
    NOMINATED = "NOMINATED"

    __str__ = str.__str__


CardUserStatusOrStr: TypeAlias = Annotated[CardUserStatus | str, open_enum_validator(CardUserStatus)]
