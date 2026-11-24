from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datasource_responsibility_content_request_dto import (
    DatasourceResponsibilityContentRequestDto,
    DatasourceResponsibilityContentRequestDtoDict,
)


class PublicApiUpdateDatasourceResponsibilitiesRequestDto(SdkBaseModel):
    responsibilities: list[DatasourceResponsibilityContentRequestDto]


class PublicApiUpdateDatasourceResponsibilitiesRequestDtoDict(TypedDict):
    responsibilities: list[DatasourceResponsibilityContentRequestDtoDict]
