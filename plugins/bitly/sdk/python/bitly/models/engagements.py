from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .engagement import Engagement, EngagementDict


class Engagements(SdkBaseModel):
    engagement_count: Optional[int] = UNSET
    engagements: Optional[Engagement] = UNSET
    date: Optional[str] = UNSET


class EngagementsDict(TypedDict):
    engagement_count: NotRequired[int]
    engagements: NotRequired[EngagementDict]
    date: NotRequired[str]
