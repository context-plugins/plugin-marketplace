from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.incident_severity_dto import IncidentSeverityDtoOrStr
from .enums.incident_status_dto import IncidentStatusDtoOrStr


class PublicApiCreateIncidentDto(SdkBaseModel):
    description: str
    lead_id: Optional[str] = Field(default=UNSET, alias="leadId")
    monitor_result_ids: list[str] = Field(alias="monitorResultIds")
    resolution_notes: Optional[str] = Field(default=UNSET, alias="resolutionNotes")
    severity: IncidentSeverityDtoOrStr
    status: Optional[IncidentStatusDtoOrStr] = UNSET
    title: str


class PublicApiCreateIncidentDtoDict(TypedDict):
    description: str
    lead_id: NotRequired[str]
    monitor_result_ids: list[str]
    resolution_notes: NotRequired[str]
    severity: IncidentSeverityDtoOrStr
    status: NotRequired[IncidentStatusDtoOrStr]
    title: str
