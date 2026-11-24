from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type import TypeOrStr
from .event import Event, EventDict
from .file import File, FileDict


class WebhookDelivery(SdkBaseModel):
    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")
    delivery_id: Optional[str] = UNSET
    monitor_id: Optional[str] = UNSET
    file: Optional[File] = UNSET
    events: Optional[list[Event]] = UNSET


class WebhookDeliveryDict(TypedDict):
    type_: NotRequired[TypeOrStr]
    delivery_id: NotRequired[str]
    monitor_id: NotRequired[str]
    file: NotRequired[FileDict]
    events: NotRequired[list[EventDict]]
