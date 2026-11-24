from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class CompassBuildEventPipelineInputDto(SdkBaseModel):
    """The build event pipeline."""

    pipeline_id: str = Field(alias="pipelineId")
    """The ID of the build event pipeline should be unique per build event. Otherwise, any existing event with a
    matching value will be overwritten."""

    url: OptionalNullable[str] = UNSET
    """The URL to the build event pipeline."""

    display_name: OptionalNullable[str] = Field(default=UNSET, alias="displayName")
    """The name of the build event pipeline."""


class CompassBuildEventPipelineInputDtoDict(TypedDict):
    pipeline_id: str
    url: NotRequired[str | None]
    display_name: NotRequired[str | None]
