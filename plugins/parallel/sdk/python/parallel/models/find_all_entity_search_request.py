from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel
from .enums.entity_type import EntityTypeOrStr


class FindAllEntitySearchRequest(SdkBaseModel):
    entity_type: EntityTypeOrStr
    """Type of entity to search for."""

    objective: str
    """Natural language description of target entities."""

    match_limit: int = 100
    """Maximum number of entities to return. Must be between 5 and 1000 (inclusive). May return fewer results. Defaults
    to 100."""


class FindAllEntitySearchRequestDict(TypedDict):
    entity_type: EntityTypeOrStr
    objective: str
    match_limit: NotRequired[int]
