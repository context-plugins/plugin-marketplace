from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .event_data import EventData, EventDataDict


class ApiV2WebhooksExampleResponse(SdkBaseModel):
    webhook_id: Optional[str] = UNSET
    resource_type: Optional[str] = UNSET
    resource_id: Optional[str] = UNSET
    event_time: Optional[str] = UNSET
    event: Optional[str] = UNSET
    event_data: Optional[EventData] = UNSET


class ApiV2WebhooksExampleResponseDict(TypedDict):
    webhook_id: NotRequired[str]
    resource_type: NotRequired[str]
    resource_id: NotRequired[str]
    event_time: NotRequired[str]
    event: NotRequired[str]
    event_data: NotRequired[EventDataDict]
