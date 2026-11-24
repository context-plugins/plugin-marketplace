from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class ContractContentDto(SdkBaseModel):
    contents: Optional[str] = UNSET
    created: Optional[RFC3339DateTime] = UNSET
    dataset_id: Optional[str] = Field(default=UNSET, alias="datasetId")
    dataset_qualified_name: Optional[str] = Field(default=UNSET, alias="datasetQualifiedName")
    id: Optional[str] = UNSET
    last_updated: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdated")


class ContractContentDtoDict(TypedDict):
    contents: NotRequired[str]
    created: NotRequired[RFC3339DateTime]
    dataset_id: NotRequired[str]
    dataset_qualified_name: NotRequired[str]
    id: NotRequired[str]
    last_updated: NotRequired[RFC3339DateTime]
