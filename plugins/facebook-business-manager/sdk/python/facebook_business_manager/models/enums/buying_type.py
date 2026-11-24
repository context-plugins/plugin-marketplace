from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BuyingType(str, Enum):
    """Buying type of the campaign"""

    AUCTION = "AUCTION"
    RESERVED = "RESERVED"

    __str__ = str.__str__


BuyingTypeOrStr: TypeAlias = Annotated[BuyingType | str, open_enum_validator(BuyingType)]
