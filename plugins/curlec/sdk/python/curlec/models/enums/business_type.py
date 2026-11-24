from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BusinessType(str, Enum):
    ECOMMERCE = "ecommerce"
    RETAIL = "retail"
    FOOD_AND_BEVERAGE = "food_and_beverage"
    EVENTS = "events"

    __str__ = str.__str__


BusinessTypeOrStr: TypeAlias = Annotated[BusinessType | str, open_enum_validator(BusinessType)]
