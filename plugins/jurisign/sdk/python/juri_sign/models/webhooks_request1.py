from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.event import EventOrStr


class WebhooksRequest1(SdkBaseModel):
    url: Optional[str] = UNSET
    events: Optional[list[EventOrStr]] = UNSET
    is_active: Optional[bool] = UNSET


class WebhooksRequest1Dict(TypedDict):
    url: NotRequired[str]
    events: NotRequired[list[EventOrStr]]
    is_active: NotRequired[bool]
