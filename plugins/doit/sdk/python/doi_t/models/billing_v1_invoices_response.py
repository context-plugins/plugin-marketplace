from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .invoice_list_item import InvoiceListItem, InvoiceListItemDict


class BillingV1InvoicesResponse(SdkBaseModel):
    invoices: Optional[list[InvoiceListItem]] = UNSET
    """Array of Invoices"""

    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    """Page token. Can be used to request the next page of results."""

    row_count: Optional[int] = Field(default=UNSET, alias="rowCount")
    """Invoice rows count"""


class BillingV1InvoicesResponseDict(TypedDict):
    invoices: NotRequired[list[InvoiceListItemDict]]
    page_token: NotRequired[str]
    row_count: NotRequired[int]
