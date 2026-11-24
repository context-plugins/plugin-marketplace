from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ComputeTuningConfigResponse(SdkBaseModel):
    """Response for ComputeTuningConfig RPC."""

    recommended_properties: Optional[dict[str, str]] = Field(default=UNSET, alias="recommendedProperties")
    """Recommended Spark properties for the query (e.g., {"spark.sql.shuffle.partitions": "500"})."""


class ComputeTuningConfigResponseDict(TypedDict):
    recommended_properties: NotRequired[dict[str, str]]
