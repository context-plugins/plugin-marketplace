from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .entity_detail import EntityDetail, EntityDetailDict


class EntitySearchResponse(SdkBaseModel):
    entities: list[EntityDetail]
    total: int


class EntitySearchResponseDict(TypedDict):
    entities: list[EntityDetailDict]
    total: int
