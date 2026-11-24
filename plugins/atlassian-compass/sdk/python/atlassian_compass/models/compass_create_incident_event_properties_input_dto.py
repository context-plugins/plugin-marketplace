from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .compass_incident_event_severity_input_dto import (
    CompassIncidentEventSeverityInputDto,
    CompassIncidentEventSeverityInputDtoDict,
)
from .enums.state import StateOrStr


class CompassCreateIncidentEventPropertiesInputDto(SdkBaseModel):
    """The list of properties of the incident event."""

    id: str
    """The ID of the incident."""

    state: StateOrStr
    """The state of the incident."""

    severity: OptionalNullable[CompassIncidentEventSeverityInputDto] = UNSET
    """The severity of the incident"""

    start_time: RFC3339DateTime = Field(alias="startTime")
    """The time when the incident started"""

    end_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="endTime")
    """The time when the incident ended"""


class CompassCreateIncidentEventPropertiesInputDtoDict(TypedDict):
    id: str
    state: StateOrStr
    severity: NotRequired[CompassIncidentEventSeverityInputDtoDict | None]
    start_time: RFC3339DateTime
    end_time: NotRequired[RFC3339DateTime | None]
