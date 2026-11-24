from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class PlayListingPending(SdkBaseModel):
    id: str
    """The app package name"""

    country: str
    """Country the listing was requested for"""

    language: str
    """Language the listing was requested in"""

    status: str = "pending"
    """Always ``pending``"""

    requested: RFC3339DateTime
    """When the crawl was queued, UTC"""

    message: str
    """What to do next"""


class PlayListingPendingDict(TypedDict):
    id: str
    country: str
    language: str
    status: NotRequired[str]
    requested: RFC3339DateTime
    message: str
