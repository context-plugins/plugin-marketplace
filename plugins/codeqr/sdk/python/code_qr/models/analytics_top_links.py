from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AnalyticsTopLinks(SdkBaseModel):
    link: str
    """The unique ID of the short link"""

    id: str
    """The unique ID of the short link"""

    domain: str
    """The domain of the short link"""

    key: str
    """The key of the short link"""

    short_link: str = Field(alias="shortLink")
    """The short link URL"""

    url: str
    """The destination URL of the short link"""

    created_at: str = Field(alias="createdAt")
    """The creation timestamp of the short link"""

    clicks: float = 0.0
    """The number of clicks from this link"""

    leads: float = 0.0
    """The number of leads from this link"""


class AnalyticsTopLinksDict(TypedDict):
    link: str
    id: str
    domain: str
    key: str
    short_link: str
    url: str
    created_at: str
    clicks: float
    leads: float
