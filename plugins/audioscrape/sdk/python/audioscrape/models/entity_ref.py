from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class EntityRef(SdkBaseModel):
    entity_type: str
    mention_count: int
    name: str
    slug: str


class EntityRefDict(TypedDict):
    entity_type: str
    mention_count: int
    name: str
    slug: str
