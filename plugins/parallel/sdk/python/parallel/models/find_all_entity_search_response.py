from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .entity_item import EntityItem, EntityItemDict


class FindAllEntitySearchResponse(SdkBaseModel):
    entity_set_id: str
    """Entity set request ID. Example: ``entity_set_cad0a6d2dec046bd95ae900527d880e7``"""

    entities: list[EntityItem]
    """Ranked list of entities."""


class FindAllEntitySearchResponseDict(TypedDict):
    entity_set_id: str
    entities: list[EntityItemDict]
