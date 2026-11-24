from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PropertyType(str, Enum):
    HOTEL = "hotel"
    APARTMENT = "apartment"
    HOUSE = "house"
    VILLA = "villa"
    COTTAGE = "cottage"
    OTHER = "other"

    __str__ = str.__str__


PropertyTypeOrStr: TypeAlias = Annotated[PropertyType | str, open_enum_validator(PropertyType)]
