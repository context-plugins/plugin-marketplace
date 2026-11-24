from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InvoiceStatus(str, Enum):
    """Invoice status enum."""

    PAID_IN_FULL = "PAID_IN_FULL"
    OPEN = "OPEN"
    PARTIAL_PAYMENT = "PARTIAL_PAYMENT"
    SCHEDULED = "SCHEDULED"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


InvoiceStatusOrStr: TypeAlias = Annotated[InvoiceStatus | str, open_enum_validator(InvoiceStatus)]
