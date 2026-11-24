from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .compass_lifecycle_event_input_properties_dto import (
    CompassLifecycleEventInputPropertiesDto,
    CompassLifecycleEventInputPropertiesDtoDict,
)


class CompassCreateLifecycleEventInputDto(SdkBaseModel):
    """A lifecycle event."""

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

    lifecycle_properties: CompassLifecycleEventInputPropertiesDto = Field(alias="lifecycleProperties")
    """The list of properties of the lifecycle event."""


class CompassCreateLifecycleEventInputDtoDict(TypedDict):
    display_name: str
    last_updated: RFC3339DateTime
    update_sequence_number: int
    description: str
    url: str
    external_event_source_id: str
    lifecycle_properties: CompassLifecycleEventInputPropertiesDtoDict
