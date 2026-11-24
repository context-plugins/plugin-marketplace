from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SocialResponse(SdkBaseModel):
    linkedin: Optional[str] = UNSET
    crunchbase: Optional[str] = UNSET
    twitter: Optional[str] = UNSET
    facebook: Optional[str] = UNSET


class SocialResponseDict(TypedDict):
    linkedin: NotRequired[str]
    crunchbase: NotRequired[str]
    twitter: NotRequired[str]
    facebook: NotRequired[str]
