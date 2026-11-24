from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .pii_entity import PiiEntity, PiiEntityDict


class DetectPiiEntitiesResponse(SdkBaseModel):
    entities: Optional[list[PiiEntity]] = Field(default=UNSET, alias="Entities")
    """A collection of PII entities identified in the input text. For each entity, the response provides the entity
    type, where the entity text begins and ends, and the level of confidence that Amazon Comprehend has in the
    detection."""


class DetectPiiEntitiesResponseDict(TypedDict):
    entities: NotRequired[list[PiiEntityDict]]
