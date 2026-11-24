from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PayrollType(int, Enum):
    """1 = FirstVersion 3 = PayrollPayment 5 = Kconnect 7 = Cash 9 = Transfer"""

    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_5 = 5
    VALUE_7 = 7
    VALUE_9 = 9

    __str__ = str.__str__


PayrollTypeOrInt: TypeAlias = Annotated[PayrollType | int, open_enum_validator(PayrollType)]
