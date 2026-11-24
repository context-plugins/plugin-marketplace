from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .dataset_responsibility_content_request_dto import (
    DatasetResponsibilityContentRequestDto,
    DatasetResponsibilityContentRequestDtoDict,
)


class PublicApiUpdateDatasetResponsibilitiesRequestDto(SdkBaseModel):
    responsibilities: list[DatasetResponsibilityContentRequestDto]


class PublicApiUpdateDatasetResponsibilitiesRequestDtoDict(TypedDict):
    responsibilities: list[DatasetResponsibilityContentRequestDtoDict]
