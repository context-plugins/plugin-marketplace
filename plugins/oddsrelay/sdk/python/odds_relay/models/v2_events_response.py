from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .event import Event, EventDict
from .page_meta import PageMeta, PageMetaDict


class V2EventsResponse(SdkBaseModel):
    meta: PageMeta
    data: list[Event]


class V2EventsResponseDict(TypedDict):
    meta: PageMetaDict
    data: list[EventDict]
