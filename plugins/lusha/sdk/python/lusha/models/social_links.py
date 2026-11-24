from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SocialLinks(SdkBaseModel):
    linkedin: Optional[str] = UNSET


class SocialLinksDict(TypedDict):
    linkedin: NotRequired[str]
