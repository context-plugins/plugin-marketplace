from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .purchase_order import PurchaseOrder, PurchaseOrderDict


class CompaniesApiPurchaseOrdersResponse(SdkBaseModel):
    value: Optional[list[PurchaseOrder]] = UNSET


class CompaniesApiPurchaseOrdersResponseDict(TypedDict):
    value: NotRequired[list[PurchaseOrderDict]]
