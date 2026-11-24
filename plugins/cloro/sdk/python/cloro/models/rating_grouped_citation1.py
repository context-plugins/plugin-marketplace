from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .supporting_website import SupportingWebsite, SupportingWebsiteDict


class RatingGroupedCitation1(SdkBaseModel):
    """Rating source information"""

    title: Optional[str] = UNSET
    """Source title"""

    url: Optional[str] = UNSET
    """Source URL"""

    supporting_websites: Optional[list[SupportingWebsite]] = UNSET
    """Array of supporting website references"""


class RatingGroupedCitation1Dict(TypedDict):
    title: NotRequired[str]
    url: NotRequired[str]
    supporting_websites: NotRequired[list[SupportingWebsiteDict]]
