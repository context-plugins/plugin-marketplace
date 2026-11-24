from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PublicApiTestDataStandardRequestDto(SdkBaseModel):
    contents: str
    dataset_id: str = Field(alias="datasetId")


class PublicApiTestDataStandardRequestDtoDict(TypedDict):
    contents: str
    dataset_id: str
