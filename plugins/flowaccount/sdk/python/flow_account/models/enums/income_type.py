from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IncomeType(int, Enum):
    """1 = Salary 3 = Commission 5 = Licensing 7 = Interest 9 = NetProfit30 11 = NetProfit25 13 = NetProfit20 15 =
    NetProfitOther 17 = TaxExemption 19 = DividenFromShareOfProfit 21 = PortionOfNetProfit 23 = RecognitionOfProfit 25 =
    TaxOther 27 = RevenueDepartmentTax 29 = Others"""

    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5
    VALUE_7 = 7
    VALUE_9 = 9
    VALUE_11 = 11
    VALUE_13 = 13
    VALUE_15 = 15
    VALUE_17 = 17
    VALUE_19 = 19
    VALUE_21 = 21
    VALUE_23 = 23
    VALUE_25 = 25
    VALUE_27 = 27
    VALUE_29 = 29

    __str__ = str.__str__


IncomeTypeOrInt: TypeAlias = Annotated[IncomeType | int, open_enum_validator(IncomeType)]
