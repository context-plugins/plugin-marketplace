from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .compass_deployment_event_environment_input_dto import (
    CompassDeploymentEventEnvironmentInputDto,
    CompassDeploymentEventEnvironmentInputDtoDict,
)
from .compass_deployment_event_pipeline_input_dto import (
    CompassDeploymentEventPipelineInputDto,
    CompassDeploymentEventPipelineInputDtoDict,
)
from .enums.state1 import State1OrStr


class CompassCreateDeploymentEventPropertiesInputDto(SdkBaseModel):
    """The list of properties of the deployment event."""

    sequence_number: int = Field(alias="sequenceNumber")
    """The sequence number for the deployment."""

    state: State1OrStr
    """The state of the deployment."""

    pipeline: CompassDeploymentEventPipelineInputDto
    """The deployment event pipeline."""

    environment: CompassDeploymentEventEnvironmentInputDto
    """The environment where the deployment event has occurred."""

    started_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="startedAt")
    """The time this deployment was started at."""

    completed_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="completedAt")
    """The time this deployment was completed at."""


class CompassCreateDeploymentEventPropertiesInputDtoDict(TypedDict):
    sequence_number: int
    state: State1OrStr
    pipeline: CompassDeploymentEventPipelineInputDtoDict
    environment: CompassDeploymentEventEnvironmentInputDtoDict
    started_at: NotRequired[RFC3339DateTime | None]
    completed_at: NotRequired[RFC3339DateTime | None]
