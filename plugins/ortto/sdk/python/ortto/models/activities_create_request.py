from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .activity import Activity, ActivityDict


class ActivitiesCreateRequest(SdkBaseModel):
    activities: list[Activity]
    merge_by: Optional[list[str]] = UNSET


class ActivitiesCreateRequestDict(TypedDict):
    activities: list[ActivityDict]
    merge_by: NotRequired[list[str]]
