from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .entity import Entity, EntityDict


class BatchDetectEntitiesItemResult(SdkBaseModel):
    index: Optional[int] = Field(default=UNSET, alias="Index")
    """The zero-based index of the document in the input list."""

    entities: Optional[list[Entity]] = Field(default=UNSET, alias="Entities")
    """One or more Entity objects, one for each entity detected in the document."""


class BatchDetectEntitiesItemResultDict(TypedDict):
    index: NotRequired[int]
    entities: NotRequired[list[EntityDict]]
