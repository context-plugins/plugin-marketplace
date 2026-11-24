from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicApiCreateContractRequestDto(SdkBaseModel):
    contents: str
    dataset_id: Optional[str] = Field(default=UNSET, alias="datasetId")
    dataset_qualified_name: Optional[str] = Field(default=UNSET, alias="datasetQualifiedName")


class PublicApiCreateContractRequestDtoDict(TypedDict):
    contents: str
    dataset_id: NotRequired[str]
    dataset_qualified_name: NotRequired[str]
