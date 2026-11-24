from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .create_events_request_event_for_request import (
    CreateEventsRequestEventForRequest,
    CreateEventsRequestEventForRequestDict,
)


class V1CreateEventsRequest(SdkBaseModel):
    events: Optional[list[CreateEventsRequestEventForRequest]] = UNSET


class V1CreateEventsRequestDict(TypedDict):
    events: NotRequired[list[CreateEventsRequestEventForRequestDict]]
