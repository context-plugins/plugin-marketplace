from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.incident_severity_dto import IncidentSeverityDtoOrStr
from .enums.incident_status_dto import IncidentStatusDtoOrStr


class PublicApiUpdateIncidentDto(SdkBaseModel):
    description: Optional[str] = UNSET
    resolution_notes: Optional[str] = Field(default=UNSET, alias="resolutionNotes")
    severity: Optional[IncidentSeverityDtoOrStr] = UNSET
    status: Optional[IncidentStatusDtoOrStr] = UNSET
    title: Optional[str] = UNSET


class PublicApiUpdateIncidentDtoDict(TypedDict):
    description: NotRequired[str]
    resolution_notes: NotRequired[str]
    severity: NotRequired[IncidentSeverityDtoOrStr]
    status: NotRequired[IncidentStatusDtoOrStr]
    title: NotRequired[str]
