from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .clixexternalv1_event_property import Clixexternalv1EventProperty, Clixexternalv1EventPropertyDict


class V1Event(SdkBaseModel):
    user_id: Optional[str] = UNSET
    device_id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    event_property: Optional[Clixexternalv1EventProperty] = UNSET


class V1EventDict(TypedDict):
    user_id: NotRequired[str]
    device_id: NotRequired[str]
    name: NotRequired[str]
    event_property: NotRequired[Clixexternalv1EventPropertyDict]
