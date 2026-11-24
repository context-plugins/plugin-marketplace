from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InvoicesGetParametersPaymentStatus(str, Enum):
    PENDING = "pending"
    PAID = "paid"
    PARTIALLY_PAID = "partiallyPaid"
    OVERDUE = "overdue"
    ERROR = "error"

    __str__ = str.__str__


InvoicesGetParametersPaymentStatusOrStr: TypeAlias = Annotated[
    InvoicesGetParametersPaymentStatus | str, open_enum_validator(InvoicesGetParametersPaymentStatus)
]
