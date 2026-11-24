from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .clixexternalv1_live_activity import Clixexternalv1LiveActivity, Clixexternalv1LiveActivityDict


class V1StartLiveActivitiesRequest(SdkBaseModel):
    """Request schema for starting live activities."""

    live_activities: Optional[list[Clixexternalv1LiveActivity]] = UNSET
    """List of live activities to start."""


class V1StartLiveActivitiesRequestDict(TypedDict):
    live_activities: NotRequired[list[Clixexternalv1LiveActivityDict]]
