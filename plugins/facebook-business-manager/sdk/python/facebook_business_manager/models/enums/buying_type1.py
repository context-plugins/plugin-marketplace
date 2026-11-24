from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BuyingType1(str, Enum):
    AUCTION = "AUCTION"
    RESERVED = "RESERVED"

    __str__ = str.__str__


BuyingType1OrStr: TypeAlias = Annotated[BuyingType1 | str, open_enum_validator(BuyingType1)]
