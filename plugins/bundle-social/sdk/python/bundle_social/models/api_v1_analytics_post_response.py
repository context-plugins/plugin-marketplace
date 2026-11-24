from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .item1 import Item1, Item1Dict
from .post import Post, PostDict
from .profile_post import ProfilePost, ProfilePostDict


class ApiV1AnalyticsPostResponse(SdkBaseModel):
    post: Post | None
    profile_post: Optional[ProfilePost] = Field(default=UNSET, alias="profilePost")
    items: list[Item1]


class ApiV1AnalyticsPostResponseDict(TypedDict):
    post: PostDict | None
    profile_post: NotRequired[ProfilePostDict]
    items: list[Item1Dict]
