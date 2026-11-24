from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AdOfferAdvertisement(SdkBaseModel):
    id: str
    """The ID of the advertisement creative."""

    recommended: bool
    """Whether this is the recommended creative for the offer."""

    name: str
    """The advertisement name."""

    headline: str
    """The advertisement headline."""

    description: Optional[str] = UNSET
    """The advertisement description."""

    kind: str
    """The advertisement creative kind."""

    sponsor_text: str
    """The sponsor label used by the creative."""

    text: str
    """The plain text extracted from the advertisement creative."""


class AdOfferAdvertisementDict(TypedDict):
    id: str
    recommended: bool
    name: str
    headline: str
    description: NotRequired[str]
    kind: str
    sponsor_text: str
    text: str
