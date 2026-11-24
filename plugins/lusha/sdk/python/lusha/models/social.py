from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Social(SdkBaseModel):
    linkedin: Optional[str] = UNSET
    crunchbase: Optional[str] = UNSET


class SocialDict(TypedDict):
    linkedin: NotRequired[str]
    crunchbase: NotRequired[str]
