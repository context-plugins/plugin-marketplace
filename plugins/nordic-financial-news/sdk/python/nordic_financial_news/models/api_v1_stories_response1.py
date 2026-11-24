from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .story_detail import StoryDetail, StoryDetailDict


class ApiV1StoriesResponse1(SdkBaseModel):
    story: Optional[StoryDetail] = UNSET


class ApiV1StoriesResponse1Dict(TypedDict):
    story: NotRequired[StoryDetailDict]
