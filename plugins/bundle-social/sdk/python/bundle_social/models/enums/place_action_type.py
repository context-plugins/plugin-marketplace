from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PlaceActionType(str, Enum):
    APPOINTMENT = "APPOINTMENT"
    ONLINE_APPOINTMENT = "ONLINE_APPOINTMENT"
    DINING_RESERVATION = "DINING_RESERVATION"
    FOOD_ORDERING = "FOOD_ORDERING"
    FOOD_DELIVERY = "FOOD_DELIVERY"
    FOOD_TAKEOUT = "FOOD_TAKEOUT"
    SHOP_ONLINE = "SHOP_ONLINE"

    __str__ = str.__str__


PlaceActionTypeOrStr: TypeAlias = Annotated[PlaceActionType | str, open_enum_validator(PlaceActionType)]
