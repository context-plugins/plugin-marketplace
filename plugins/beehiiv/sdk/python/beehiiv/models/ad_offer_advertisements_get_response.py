from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .ad_offer_advertisement import AdOfferAdvertisement, AdOfferAdvertisementDict


class AdOfferAdvertisementsGetResponse(SdkBaseModel):
    advertisements: list[AdOfferAdvertisement]
    """A list of active advertisement creatives available for this offer."""


class AdOfferAdvertisementsGetResponseDict(TypedDict):
    advertisements: list[AdOfferAdvertisementDict]
