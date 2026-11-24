from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AdOfferCreateResponseData(SdkBaseModel):
    offer_id: str
    """The ID of the accepted ad offer."""

    opportunity_id: str
    """The ID of the drafted and accepted opportunity created from the offer."""

    advertisement_id: str
    """The ID of the advertisement creative selected for the opportunity."""

    post_id: str
    """The ID of the post where the opportunity was inserted."""


class AdOfferCreateResponseDataDict(TypedDict):
    offer_id: str
    opportunity_id: str
    advertisement_id: str
    post_id: str
