from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BillingStatementPaymentStatus(str, Enum):
    """Enum representing the payment status of a billing statement."""

    UNPAID = "UNPAID"
    PAID = "PAID"
    PENDING = "PENDING"
    FAILED = "FAILED"
    VOIDED = "VOIDED"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


BillingStatementPaymentStatusOrStr: TypeAlias = Annotated[
    BillingStatementPaymentStatus | str, open_enum_validator(BillingStatementPaymentStatus)
]
