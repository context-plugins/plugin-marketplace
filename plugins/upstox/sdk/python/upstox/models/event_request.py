from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EventRequest(SdkBaseModel):
    event_type: str
    event: str
    data: Optional[dict[str, Any]] = UNSET


class EventRequestDict(TypedDict):
    event_type: str
    event: str
    data: NotRequired[dict[str, Any]]
