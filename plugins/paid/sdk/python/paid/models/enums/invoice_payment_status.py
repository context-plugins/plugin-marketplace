from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InvoicePaymentStatus(str, Enum):
    PENDING = "pending"
    PAID = "paid"
    PARTIALLY_PAID = "partiallyPaid"
    OVERDUE = "overdue"
    ERROR = "error"

    __str__ = str.__str__


InvoicePaymentStatusOrStr: TypeAlias = Annotated[InvoicePaymentStatus | str, open_enum_validator(InvoicePaymentStatus)]
