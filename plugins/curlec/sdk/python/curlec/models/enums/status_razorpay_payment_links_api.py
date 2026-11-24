from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusRazorpayPaymentLinksApi(str, Enum):
    """created: awaiting payment. partially_paid: one or more partial payments received. expired: past expiry with no
    full payment. cancelled: manually cancelled. paid: fully paid."""

    CREATED = "created"
    PARTIALLY_PAID = "partially_paid"
    EXPIRED = "expired"
    CANCELLED = "cancelled"
    PAID = "paid"

    __str__ = str.__str__


StatusRazorpayPaymentLinksApiOrStr: TypeAlias = Annotated[
    StatusRazorpayPaymentLinksApi | str, open_enum_validator(StatusRazorpayPaymentLinksApi)
]
