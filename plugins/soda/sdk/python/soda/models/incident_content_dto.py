from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.incident_severity_dto import IncidentSeverityDtoOrStr
from .enums.incident_status_dto import IncidentStatusDtoOrStr


class IncidentContentDto(SdkBaseModel):
    description: str
    resolution_notes: Optional[str] = Field(default=UNSET, alias="resolutionNotes")
    severity: IncidentSeverityDtoOrStr
    cloud_url: str = Field(alias="cloudUrl")
    id: str
    name: str
    number: int
    status: IncidentStatusDtoOrStr


class IncidentContentDtoDict(TypedDict):
    description: str
    resolution_notes: NotRequired[str]
    severity: IncidentSeverityDtoOrStr
    cloud_url: str
    id: str
    name: str
    number: int
    status: IncidentStatusDtoOrStr
