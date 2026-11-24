from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .purchase import Purchase, PurchaseDict


class ApiV2NumbersPurchaseResponse(SdkBaseModel):
    purchase: Purchase
    """Purchase response object"""


class ApiV2NumbersPurchaseResponseDict(TypedDict):
    purchase: PurchaseDict
