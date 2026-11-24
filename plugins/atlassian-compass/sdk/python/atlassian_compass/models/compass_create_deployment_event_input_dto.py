from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .compass_create_deployment_event_properties_input_dto import (
    CompassCreateDeploymentEventPropertiesInputDto,
    CompassCreateDeploymentEventPropertiesInputDtoDict,
)


class CompassCreateDeploymentEventInputDto(SdkBaseModel):
    """A deployment event."""

    display_name: str = Field(alias="displayName")
    """The name of the deployment event."""

    update_sequence_number: int = Field(alias="updateSequenceNumber")
    """A number specifying the order of the update to the event. Must be incremented to save new events. Otherwise, the
    request will be ignored."""

    url: str
    """The URL of the deployment event."""

    description: str
    """The description of the deployment event."""

    last_updated: RFC3339DateTime = Field(alias="lastUpdated")
    """The last time this event was updated."""

    external_event_source_id: str = Field(alias="externalEventSourceId")
    """The ID of the external event source."""

    deployment_properties: CompassCreateDeploymentEventPropertiesInputDto = Field(alias="deploymentProperties")
    """The list of properties of the deployment event."""


class CompassCreateDeploymentEventInputDtoDict(TypedDict):
    display_name: str
    update_sequence_number: int
    url: str
    description: str
    last_updated: RFC3339DateTime
    external_event_source_id: str
    deployment_properties: CompassCreateDeploymentEventPropertiesInputDtoDict
