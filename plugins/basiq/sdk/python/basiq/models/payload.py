from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .links5 import Links5, Links5Dict


class Payload(SdkBaseModel):
    event_type_id: Optional[str] = Field(default=UNSET, alias="eventTypeId")
    event_id: Optional[str] = Field(default=UNSET, alias="eventId")
    links: Optional[Links5] = UNSET


class PayloadDict(TypedDict):
    event_type_id: NotRequired[str]
    event_id: NotRequired[str]
    links: NotRequired[Links5Dict]
