from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .compass_create_incident_event_properties_input_dto import (
    CompassCreateIncidentEventPropertiesInputDto,
    CompassCreateIncidentEventPropertiesInputDtoDict,
)


class CompassCreateIncidentEventInputDto(SdkBaseModel):
    """An incident event."""

    display_name: str = Field(alias="displayName")
    """The name of the event."""

    last_updated: RFC3339DateTime = Field(alias="lastUpdated")
    """The last time this event was updated."""

    update_sequence_number: int = Field(alias="updateSequenceNumber")
    """A number specifying the order of the update to the event. Must be incremented to save new events. Otherwise, the
    request will be ignored."""

    description: str
    """The description of the event."""

    url: str
    """The URL of the event."""

    external_event_source_id: str = Field(alias="externalEventSourceId")
    """The ID of the external event source."""

    incident_properties: CompassCreateIncidentEventPropertiesInputDto = Field(alias="incidentProperties")
    """The list of properties of the incident event."""


class CompassCreateIncidentEventInputDtoDict(TypedDict):
    display_name: str
    last_updated: RFC3339DateTime
    update_sequence_number: int
    description: str
    url: str
    external_event_source_id: str
    incident_properties: CompassCreateIncidentEventPropertiesInputDtoDict
