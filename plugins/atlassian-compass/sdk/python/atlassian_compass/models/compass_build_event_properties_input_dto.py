from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .compass_build_event_pipeline_input_dto import (
    CompassBuildEventPipelineInputDto,
    CompassBuildEventPipelineInputDtoDict,
)
from .enums.state2 import State2OrStr


class CompassBuildEventPropertiesInputDto(SdkBaseModel):
    """The list of properties of the build event."""

    state: State2OrStr
    """The state of the build."""

    pipeline: CompassBuildEventPipelineInputDto
    """The build event pipeline."""

    started_at: RFC3339DateTime = Field(alias="startedAt")
    """The time the build started."""

    completed_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="completedAt")
    """The time the build completed."""


class CompassBuildEventPropertiesInputDtoDict(TypedDict):
    state: State2OrStr
    pipeline: CompassBuildEventPipelineInputDtoDict
    started_at: RFC3339DateTime
    completed_at: NotRequired[RFC3339DateTime | None]
