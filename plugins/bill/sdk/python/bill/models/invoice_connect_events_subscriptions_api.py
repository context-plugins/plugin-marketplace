from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class InvoiceConnectEventsSubscriptionsApi(SdkBaseModel):
    """Invoice information."""

    invoice_number: Optional[str] = Field(default=UNSET, alias="invoiceNumber")
    invoice_date: Optional[Date] = Field(default=UNSET, alias="invoiceDate")


class InvoiceConnectEventsSubscriptionsApiDict(TypedDict):
    invoice_number: NotRequired[str]
    invoice_date: NotRequired[Date]
