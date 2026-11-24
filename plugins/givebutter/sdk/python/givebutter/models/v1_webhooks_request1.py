from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.event import EventOrStr


class V1WebhooksRequest1(SdkBaseModel):
    url: str
    events: list[EventOrStr]
    name: OptionalNullable[str] = UNSET
    enabled: Optional[bool] = UNSET


class V1WebhooksRequest1Dict(TypedDict):
    url: str
    events: list[EventOrStr]
    name: NotRequired[str | None]
    enabled: NotRequired[bool]
