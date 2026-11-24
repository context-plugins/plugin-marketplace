from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PublicApiOnboardDatasetsRequestDto(SdkBaseModel):
    discovered_dataset_ids: list[str] = Field(alias="discoveredDatasetIds")


class PublicApiOnboardDatasetsRequestDtoDict(TypedDict):
    discovered_dataset_ids: list[str]
