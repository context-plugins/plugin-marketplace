from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BusinessType(int, Enum):
    """1 = SellingProducts 3 = SellingServices 5 = SellingBoth 7 = Custom"""

    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5
    VALUE_7 = 7

    __str__ = str.__str__


BusinessTypeOrInt: TypeAlias = Annotated[BusinessType | int, open_enum_validator(BusinessType)]
