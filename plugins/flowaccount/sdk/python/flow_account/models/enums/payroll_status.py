from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PayrollStatus(int, Enum):
    """0 = Draft 1 = Awaiting 2 = Reset 3 = Paid 4 = Partial 5 = Rejected 7 = Approved 11 = PushPayAwaiting 13 =
    PushPayProcessed 15 = PushPayRejected 17 = PushPayPartial 19 = PushPayPendingPayments 50 = KConnectAwaiting 52 =
    KConnectProcessed 54 = KConnectRejected 56 = KConnectPendingPayments"""

    VALUE_0 = 0
    VALUE_1 = 1
    VALUE_2 = 2
    VALUE_3 = 3
    VALUE_4 = 4
    VALUE_5 = 5
    VALUE_7 = 7
    VALUE_11 = 11
    VALUE_13 = 13
    VALUE_15 = 15
    VALUE_17 = 17
    VALUE_19 = 19
    VALUE_50 = 50
    VALUE_52 = 52
    VALUE_54 = 54
    VALUE_56 = 56

    __str__ = str.__str__


PayrollStatusOrInt: TypeAlias = Annotated[PayrollStatus | int, open_enum_validator(PayrollStatus)]
