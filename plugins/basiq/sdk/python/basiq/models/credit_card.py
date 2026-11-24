from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreditCard(SdkBaseModel):
    min_payment_amount: str = Field(alias="minPaymentAmount")
    """The minimum payment amount due for the next card payment."""

    payment_due_amount: str = Field(alias="paymentDueAmount")
    """The amount due for the next card payment."""

    payment_currency: Optional[str] = Field(default=UNSET, alias="paymentCurrency")
    """If absent assumes AUD."""

    payment_due_date: str = Field(alias="paymentDueDate")
    """Date that the next payment for the card is due."""


class CreditCardDict(TypedDict):
    min_payment_amount: str
    payment_due_amount: str
    payment_currency: NotRequired[str]
    payment_due_date: str
