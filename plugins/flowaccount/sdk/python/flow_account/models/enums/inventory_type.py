from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InventoryType(int, Enum):
    """3 = Initial 5 = BroughtForward 7 = In 11 = TransferIn 17 = Out 21 = TransferOut 25 = CreditNote 27 = DebitNote 29
    = InternalUse 31 = Hold 35 = AdjustIn 39 = AdjustOut"""

    VALUE_3 = 3
    VALUE_5 = 5
    VALUE_7 = 7
    VALUE_11 = 11
    VALUE_17 = 17
    VALUE_21 = 21
    VALUE_25 = 25
    VALUE_27 = 27
    VALUE_29 = 29
    VALUE_31 = 31
    VALUE_35 = 35
    VALUE_39 = 39

    __str__ = str.__str__


InventoryTypeOrInt: TypeAlias = Annotated[InventoryType | int, open_enum_validator(InventoryType)]
