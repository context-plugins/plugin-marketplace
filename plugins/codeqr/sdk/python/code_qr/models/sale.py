from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.payment_processor import PaymentProcessor, PaymentProcessorOrStr


class Sale(SdkBaseModel):
    amount: int
    """The amount of the sale in the smallest unit of ``currency`` — cents for two-decimal currencies, the full integer
    for zero-decimal ones (e.g. ``1437`` JPY), thousandths for three-decimal ones (e.g. ``1437`` KWD fils)."""

    invoice_id: str | None = Field(alias="invoiceId")
    """The invoice ID of the sale. Can be used as a idempotency key – only one sale event can be recorded for a given
    invoice ID."""

    payment_processor: PaymentProcessorOrStr = Field(default=PaymentProcessor.CUSTOM, alias="paymentProcessor")
    """The payment processor via which the sale was made."""


class SaleDict(TypedDict):
    amount: int
    invoice_id: str | None
    payment_processor: PaymentProcessorOrStr
