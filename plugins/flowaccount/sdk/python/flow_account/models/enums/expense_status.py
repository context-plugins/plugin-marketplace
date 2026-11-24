from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExpenseStatus(int, Enum):
    """1 = Awaiting 3 = Approved 4 = PendingPayment 5 = Paid 6 = PaidByPaymentSlip 7 = Void 9 = ApprovedAndProcessed 11
    = Received 23 = ReceivedByPaymentSlip"""

    VALUE_1 = 1
    VALUE_3 = 3
    VALUE_4 = 4
    VALUE_5 = 5
    VALUE_6 = 6
    VALUE_7 = 7
    VALUE_9 = 9
    VALUE_11 = 11
    VALUE_23 = 23

    __str__ = str.__str__


ExpenseStatusOrInt: TypeAlias = Annotated[ExpenseStatus | int, open_enum_validator(ExpenseStatus)]
