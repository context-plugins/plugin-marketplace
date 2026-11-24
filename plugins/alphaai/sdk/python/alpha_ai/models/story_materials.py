from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .story_material import StoryMaterial, StoryMaterialDict


class StoryMaterials(SdkBaseModel):
    story_id: str
    results: list[StoryMaterial]
    next_cursor: str | None
    """Opaque cursor for the next (newer) page; ``null`` at the end."""


class StoryMaterialsDict(TypedDict):
    story_id: str
    results: list[StoryMaterialDict]
    next_cursor: str | None
