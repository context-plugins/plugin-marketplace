from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AnomalySourceMetadata(SdkBaseModel):
    source: Optional[str] = Field(default=UNSET, alias="Source")
    """The source of the anomaly."""

    source_resource_name: Optional[str] = Field(default=UNSET, alias="SourceResourceName")
    """The name of the anomaly's resource."""

    source_resource_type: Optional[str] = Field(default=UNSET, alias="SourceResourceType")
    """The anomaly's resource type."""


class AnomalySourceMetadataDict(TypedDict):
    source: NotRequired[str]
    source_resource_name: NotRequired[str]
    source_resource_type: NotRequired[str]
