from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .item3 import Item3, Item3Dict
from .post import Post, PostDict
from .profile_post import ProfilePost, ProfilePostDict


class ApiV1AnalyticsPostRawResponse(SdkBaseModel):
    post: Post | None
    profile_post: Optional[ProfilePost] = Field(default=UNSET, alias="profilePost")
    items: list[Item3]


class ApiV1AnalyticsPostRawResponseDict(TypedDict):
    post: PostDict | None
    profile_post: NotRequired[ProfilePostDict]
    items: list[Item3Dict]
