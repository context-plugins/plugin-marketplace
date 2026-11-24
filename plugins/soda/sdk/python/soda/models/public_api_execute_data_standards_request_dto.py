from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PublicApiExecuteDataStandardsRequestDto(SdkBaseModel):
    dataset_id: str = Field(alias="datasetId")


class PublicApiExecuteDataStandardsRequestDtoDict(TypedDict):
    dataset_id: str
