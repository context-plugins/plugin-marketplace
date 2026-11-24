from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DataStandardScopeMatchingDatasetContentDto(SdkBaseModel):
    datasource_id: str = Field(alias="datasourceId")
    id: str
    label: Optional[str] = UNSET
    name: str
    qualified_name: Optional[str] = Field(default=UNSET, alias="qualifiedName")


class DataStandardScopeMatchingDatasetContentDtoDict(TypedDict):
    datasource_id: str
    id: str
    label: NotRequired[str]
    name: str
    qualified_name: NotRequired[str]
