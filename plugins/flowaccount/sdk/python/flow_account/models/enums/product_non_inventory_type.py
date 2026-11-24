from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductNonInventoryType(int, Enum):
    """1 = NonStockProduct 3 = SparepartProduct 5 = SampleProduct 7 = FreemiumProduct 9 = SupplyProduct 11 =
    OthersProduct"""

    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5
    VALUE_7 = 7
    VALUE_9 = 9
    VALUE_11 = 11

    __str__ = str.__str__


ProductNonInventoryTypeOrInt: TypeAlias = Annotated[
    ProductNonInventoryType | int, open_enum_validator(ProductNonInventoryType)
]
