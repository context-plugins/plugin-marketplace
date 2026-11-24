from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicApiGenerateContractRequestDto(SdkBaseModel):
    dataset_ids: Optional[list[str]] = Field(default=UNSET, alias="datasetIds")
    dataset_qualified_names: Optional[list[str]] = Field(default=UNSET, alias="datasetQualifiedNames")


class PublicApiGenerateContractRequestDtoDict(TypedDict):
    dataset_ids: NotRequired[list[str]]
    dataset_qualified_names: NotRequired[list[str]]
