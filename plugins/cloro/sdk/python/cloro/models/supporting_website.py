from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SupportingWebsite(SdkBaseModel):
    title: Optional[str] = UNSET
    """Website title"""

    url: Optional[str] = UNSET
    """Website URL"""


class SupportingWebsiteDict(TypedDict):
    title: NotRequired[str]
    url: NotRequired[str]
