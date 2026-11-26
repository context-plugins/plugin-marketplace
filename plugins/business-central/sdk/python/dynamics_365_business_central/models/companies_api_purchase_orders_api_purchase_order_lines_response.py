from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .purchase_order_line import PurchaseOrderLine, PurchaseOrderLineDict


class CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse(SdkBaseModel):
    value: Optional[list[PurchaseOrderLine]] = UNSET


class CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponseDict(TypedDict):
    value: NotRequired[list[PurchaseOrderLineDict]]
