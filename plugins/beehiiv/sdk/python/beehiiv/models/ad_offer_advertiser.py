from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AdOfferAdvertiser(SdkBaseModel):
    name: str
    """The advertiser name."""

    logo_url: Optional[str] = UNSET
    """The advertiser logo URL."""

    description: Optional[str] = UNSET
    """The advertiser description."""

    url: Optional[str] = UNSET
    """The advertiser website URL."""


class AdOfferAdvertiserDict(TypedDict):
    name: str
    logo_url: NotRequired[str]
    description: NotRequired[str]
    url: NotRequired[str]
