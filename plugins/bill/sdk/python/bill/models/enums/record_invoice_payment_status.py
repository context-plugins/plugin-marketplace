from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RecordInvoicePaymentStatus(str, Enum):
    """Record Invoice payment status enum."""

    PAID = "PAID"
    VOID = "VOID"
    SCHEDULED = "SCHEDULED"
    CANCELED = "CANCELED"
    ESCHEATED = "ESCHEATED"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


RecordInvoicePaymentStatusOrStr: TypeAlias = Annotated[
    RecordInvoicePaymentStatus | str, open_enum_validator(RecordInvoicePaymentStatus)
]
