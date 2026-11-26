from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InvoicePaymentLinkRequestDto(SdkBaseModel):
    """Get invoice payment link"""

    customer_id: str = Field(alias="customerId")
    """BILL-generated ID of the customer. The value begins with ``0cu``."""

    email: str
    """Recipient email address.

    When a customer payment is made with the invoice payment link, BILL sends a payment receipt to the provided email
    address."""

    return_url: Optional[str] = Field(default=UNSET, alias="returnUrl")
    """Redirect URL after the customer payment is complete"""


class InvoicePaymentLinkRequestDtoDict(TypedDict):
    customer_id: str
    email: str
    return_url: NotRequired[str]
