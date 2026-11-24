from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class HomeType(str, Enum):
    HOUSE = "house"
    CONDO = "condo"
    TOWNHOUSE = "townhouse"
    MULTI_FAMILY = "multi_family"
    MANUFACTURED = "manufactured"
    LOT = "lot"
    APARTMENT = "apartment"

    __str__ = str.__str__


HomeTypeOrStr: TypeAlias = Annotated[HomeType | str, open_enum_validator(HomeType)]
