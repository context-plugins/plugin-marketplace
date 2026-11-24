from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class EventSource(SdkBaseModel):
    name: str
    id: str


class EventSourceDict(TypedDict):
    name: str
    id: str
