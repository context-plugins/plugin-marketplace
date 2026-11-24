from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .pagination_didlogic_com_purchases_api import (
    PaginationDidlogicComPurchasesApi,
    PaginationDidlogicComPurchasesApiDict,
)
from .purchase_didlogic_com_purchases_api import PurchaseDidlogicComPurchasesApi, PurchaseDidlogicComPurchasesApiDict


class ApiV1PurchasesResponse(SdkBaseModel):
    purchases: list[PurchaseDidlogicComPurchasesApi]
    """List of purchased DID numbers"""

    pagination: PaginationDidlogicComPurchasesApi


class ApiV1PurchasesResponseDict(TypedDict):
    purchases: list[PurchaseDidlogicComPurchasesApiDict]
    pagination: PaginationDidlogicComPurchasesApiDict
