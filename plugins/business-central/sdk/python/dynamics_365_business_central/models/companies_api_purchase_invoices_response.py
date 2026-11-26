from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .purchase_invoice import PurchaseInvoice, PurchaseInvoiceDict


class CompaniesApiPurchaseInvoicesResponse(SdkBaseModel):
    value: Optional[list[PurchaseInvoice]] = UNSET


class CompaniesApiPurchaseInvoicesResponseDict(TypedDict):
    value: NotRequired[list[PurchaseInvoiceDict]]
