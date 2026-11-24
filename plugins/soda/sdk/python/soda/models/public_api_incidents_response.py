from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .public_api_incident_with_rca_report_dto import (
    PublicApiIncidentWithRcaReportDto,
    PublicApiIncidentWithRcaReportDtoDict,
)


class PublicApiIncidentsResponse(SdkBaseModel):
    content: list[PublicApiIncidentWithRcaReportDto]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int = Field(alias="totalElements")
    total_pages: int = Field(alias="totalPages")


class PublicApiIncidentsResponseDict(TypedDict):
    content: list[PublicApiIncidentWithRcaReportDtoDict]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int
    total_pages: int
