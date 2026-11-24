from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InsightImpactGraphEdge(SdkBaseModel):
    reference_id: Optional[int] = Field(default=UNSET, alias="ReferenceId")
    """Identifier of the edge. Unique within a service map."""


class InsightImpactGraphEdgeDict(TypedDict):
    reference_id: NotRequired[int]
