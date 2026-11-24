from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DeductionType(int, Enum):
    """0 = None 1 = CashDiscount 3 = Commission 5 = ManagementFee 7 = Roundings 9 = Retentions"""

    VALUE_0 = 0
    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5
    VALUE_7 = 7
    VALUE_9 = 9

    __str__ = str.__str__


DeductionTypeOrInt: TypeAlias = Annotated[DeductionType | int, open_enum_validator(DeductionType)]
