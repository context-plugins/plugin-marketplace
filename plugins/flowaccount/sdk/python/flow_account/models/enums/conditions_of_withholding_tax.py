from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ConditionsOfWithholdingTax(int, Enum):
    """1 = WithholdsTaxAtSource 2 = PayEveryTime 3 = PayOneTime"""

    VALUE_1 = 1
    VALUE_2 = 2
    VALUE_3 = 3

    __str__ = str.__str__


ConditionsOfWithholdingTaxOrInt: TypeAlias = Annotated[
    ConditionsOfWithholdingTax | int, open_enum_validator(ConditionsOfWithholdingTax)
]
