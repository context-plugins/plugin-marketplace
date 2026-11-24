from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .entity_label import EntityLabel, EntityLabelDict


class ContainsPiiEntitiesResponse(SdkBaseModel):
    labels: Optional[list[EntityLabel]] = Field(default=UNSET, alias="Labels")
    """The labels used in the document being analyzed. Individual labels represent personally identifiable information
    (PII) entity types."""


class ContainsPiiEntitiesResponseDict(TypedDict):
    labels: NotRequired[list[EntityLabelDict]]
