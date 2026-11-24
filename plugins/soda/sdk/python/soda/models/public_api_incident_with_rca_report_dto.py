from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.incident_severity_dto import IncidentSeverityDtoOrStr
from .enums.incident_status_dto import IncidentStatusDtoOrStr


class PublicApiIncidentWithRcaReportDto(SdkBaseModel):
    has_rca_report: Optional[bool] = Field(default=UNSET, alias="hasRcaReport")
    description: str
    resolution_notes: Optional[str] = Field(default=UNSET, alias="resolutionNotes")
    severity: IncidentSeverityDtoOrStr
    cloud_url: str = Field(alias="cloudUrl")
    id: str
    name: str
    number: int
    status: IncidentStatusDtoOrStr


class PublicApiIncidentWithRcaReportDtoDict(TypedDict):
    has_rca_report: NotRequired[bool]
    description: str
    resolution_notes: NotRequired[str]
    severity: IncidentSeverityDtoOrStr
    cloud_url: str
    id: str
    name: str
    number: int
    status: IncidentStatusDtoOrStr
