from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TrackSaleResponse(SdkBaseModel):
    event_name: str = Field(alias="eventName")
    customer_id: str = Field(alias="customerId")
    amount: float
    payment_processor: str = Field(alias="paymentProcessor")
    invoice_id: str | None = Field(alias="invoiceId")
    currency: str
    metadata: dict[str, Any] | None


class TrackSaleResponseDict(TypedDict):
    event_name: str
    customer_id: str
    amount: float
    payment_processor: str
    invoice_id: str | None
    currency: str
    metadata: dict[str, Any] | None
