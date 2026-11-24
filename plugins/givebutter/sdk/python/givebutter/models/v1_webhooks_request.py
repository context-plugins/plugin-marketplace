from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.event import EventOrStr


class V1WebhooksRequest(SdkBaseModel):
    url: str
    event: Optional[EventOrStr] = UNSET
    events: Optional[list[EventOrStr]] = UNSET
    name: OptionalNullable[str] = UNSET
    enabled: Optional[bool] = UNSET


class V1WebhooksRequestDict(TypedDict):
    url: str
    event: NotRequired[EventOrStr]
    events: NotRequired[list[EventOrStr]]
    name: NotRequired[str | None]
    enabled: NotRequired[bool]
