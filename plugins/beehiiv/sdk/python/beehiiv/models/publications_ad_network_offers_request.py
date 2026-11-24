from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PublicationsAdNetworkOffersRequest(SdkBaseModel):
    offer_id: str
    """The ID of the ad offer to accept."""

    advertisement_id: str
    """The ID of the advertisement creative to use."""

    post_id: str
    """The ID of the post where the advertisement should be inserted."""


class PublicationsAdNetworkOffersRequestDict(TypedDict):
    offer_id: str
    advertisement_id: str
    post_id: str
