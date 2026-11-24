from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .ad_offer import AdOffer, AdOfferDict


class AdOffersGetResponse(SdkBaseModel):
    offers: list[AdOffer]
    """A list of ad offers available for this publication."""


class AdOffersGetResponseDict(TypedDict):
    offers: list[AdOfferDict]
