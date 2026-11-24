from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AppCreativeVideo(SdkBaseModel):
    preview: Optional[str] = UNSET
    video: Optional[str] = UNSET
    url: Optional[str] = UNSET


class AppCreativeVideoDict(TypedDict):
    preview: NotRequired[str]
    video: NotRequired[str]
    url: NotRequired[str]
