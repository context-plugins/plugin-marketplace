from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Links(SdkBaseModel):
    """Social media links for the company"""

    facebook: Optional[str] = UNSET
    twitter: Optional[str] = UNSET
    linkedin: Optional[str] = UNSET


class LinksDict(TypedDict):
    facebook: NotRequired[str]
    twitter: NotRequired[str]
    linkedin: NotRequired[str]
