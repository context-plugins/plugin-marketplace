from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class DiscoveredDatasetContentDto(SdkBaseModel):
    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    datasource_id: str = Field(alias="datasourceId")
    id: str
    name: str
    onboarded: bool
    qualified_name: str = Field(alias="qualifiedName")


class DiscoveredDatasetContentDtoDict(TypedDict):
    created_at: NotRequired[RFC3339DateTime]
    datasource_id: str
    id: str
    name: str
    onboarded: bool
    qualified_name: str
