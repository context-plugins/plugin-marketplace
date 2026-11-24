from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .page_meta import PageMeta, PageMetaDict
from .sport import Sport, SportDict


class V2SportsResponse(SdkBaseModel):
    meta: PageMeta
    data: list[Sport]


class V2SportsResponseDict(TypedDict):
    meta: PageMetaDict
    data: list[SportDict]
