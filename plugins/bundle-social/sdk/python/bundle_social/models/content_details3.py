from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ContentDetails3(SdkBaseModel):
    video_id: Optional[str] = Field(default=UNSET, alias="videoId")
    video_published_at: Optional[str] = Field(default=UNSET, alias="videoPublishedAt")


class ContentDetails3Dict(TypedDict):
    video_id: NotRequired[str]
    video_published_at: NotRequired[str]
