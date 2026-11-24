from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .v1_event import V1Event, V1EventDict


class V1CreateEventsResponse(SdkBaseModel):
    events: Optional[list[V1Event]] = UNSET


class V1CreateEventsResponseDict(TypedDict):
    events: NotRequired[list[V1EventDict]]
