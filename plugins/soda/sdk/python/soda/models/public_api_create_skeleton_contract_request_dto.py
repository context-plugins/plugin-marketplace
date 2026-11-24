from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicApiCreateSkeletonContractRequestDto(SdkBaseModel):
    dataset_id: Optional[str] = Field(default=UNSET, alias="datasetId")
    dataset_qualified_name: Optional[str] = Field(default=UNSET, alias="datasetQualifiedName")


class PublicApiCreateSkeletonContractRequestDtoDict(TypedDict):
    dataset_id: NotRequired[str]
    dataset_qualified_name: NotRequired[str]
