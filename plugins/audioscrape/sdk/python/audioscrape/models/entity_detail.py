from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .entity_episode_mention import EntityEpisodeMention, EntityEpisodeMentionDict


class EntityDetail(SdkBaseModel):
    description: OptionalNullable[str] = UNSET
    entity_type: str
    id: int
    mention_count: int
    name: str
    recent_episodes: Optional[list[EntityEpisodeMention]] = UNSET
    """Top episodes mentioning this entity. Only populated by ``GET /api/entities/{slug}`` — search results (``GET
    /api/entities``) always return an empty list and the field is omitted from the JSON to keep responses compact."""

    slug: str
    wikidata_qid: OptionalNullable[str] = UNSET
    """Wikidata QID for head entities (GH#161 linking) — the stable external join key. Omitted when unlinked (the long
    tail)."""


class EntityDetailDict(TypedDict):
    description: NotRequired[str | None]
    entity_type: str
    id: int
    mention_count: int
    name: str
    recent_episodes: NotRequired[list[EntityEpisodeMentionDict]]
    slug: str
    wikidata_qid: NotRequired[str | None]
