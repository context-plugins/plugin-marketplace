from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .ad_offer_create_response_data import AdOfferCreateResponseData, AdOfferCreateResponseDataDict


class AdOfferCreateResponse(SdkBaseModel):
    data: AdOfferCreateResponseData


class AdOfferCreateResponseDict(TypedDict):
    data: AdOfferCreateResponseDataDict
