from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Category(str, Enum):
    CATEGORY_UNSPECIFIED = "CATEGORY_UNSPECIFIED"
    COVER = "COVER"
    PROFILE = "PROFILE"
    LOGO = "LOGO"
    EXTERIOR = "EXTERIOR"
    INTERIOR = "INTERIOR"
    PRODUCT = "PRODUCT"
    AT_WORK = "AT_WORK"
    FOOD_AND_DRINK = "FOOD_AND_DRINK"
    MENU = "MENU"
    COMMON_AREA = "COMMON_AREA"
    ROOMS = "ROOMS"
    TEAMS = "TEAMS"
    ADDITIONAL = "ADDITIONAL"

    __str__ = str.__str__


CategoryOrStr: TypeAlias = Annotated[Category | str, open_enum_validator(Category)]
