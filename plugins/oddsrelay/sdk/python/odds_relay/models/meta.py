from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Meta(SdkBaseModel):
    feed_type: str
    count: int
    version: str


class MetaDict(TypedDict):
    feed_type: str
    count: int
    version: str
