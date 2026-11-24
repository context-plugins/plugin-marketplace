from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AdjustInventoryReason(int, Enum):
    """0 = Default 1 = DisastersFire 3 = StolenGoods 5 = StockWrittenOff 7 = StockTakingResults 9 = ReturnedStock 11 =
    DamagedGoods 13 = RawMaterialUsed 15 = FinishedGoodsTransfer 17 = Other"""

    VALUE_0 = 0
    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5
    VALUE_7 = 7
    VALUE_9 = 9
    VALUE_11 = 11
    VALUE_13 = 13
    VALUE_15 = 15
    VALUE_17 = 17

    __str__ = str.__str__


AdjustInventoryReasonOrInt: TypeAlias = Annotated[
    AdjustInventoryReason | int, open_enum_validator(AdjustInventoryReason)
]
