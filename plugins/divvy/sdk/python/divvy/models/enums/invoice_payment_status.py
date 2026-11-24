from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InvoicePaymentStatus(str, Enum):
    """Invoice payment status enum."""

    PAID = "PAID"
    VOID = "VOID"
    SCHEDULED = "SCHEDULED"
    CANCELED = "CANCELED"
    INITIATED = "INITIATED"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


InvoicePaymentStatusOrStr: TypeAlias = Annotated[InvoicePaymentStatus | str, open_enum_validator(InvoicePaymentStatus)]
