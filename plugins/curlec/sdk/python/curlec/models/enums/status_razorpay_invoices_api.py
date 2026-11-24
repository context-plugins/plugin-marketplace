from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusRazorpayInvoicesApi(str, Enum):
    """Invoice lifecycle status. draft→issued→paid/partially_paid/cancelled/expired."""

    DRAFT = "draft"
    ISSUED = "issued"
    PARTIALLY_PAID = "partially_paid"
    PAID = "paid"
    CANCELLED = "cancelled"
    EXPIRED = "expired"
    DELETED = "deleted"

    __str__ = str.__str__


StatusRazorpayInvoicesApiOrStr: TypeAlias = Annotated[
    StatusRazorpayInvoicesApi | str, open_enum_validator(StatusRazorpayInvoicesApi)
]
