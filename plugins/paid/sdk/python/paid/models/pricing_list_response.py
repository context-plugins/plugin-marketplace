from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .pricing_response import PricingResponse, PricingResponseDict


class PricingListResponse(SdkBaseModel):
    data: list[PricingResponse]


class PricingListResponseDict(TypedDict):
    data: list[PricingResponseDict]
