from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .pipeline_command import PipelineCommand, PipelineCommandDict
from .pipeline_image2 import PipelineImage2, PipelineImage2Dict

if TYPE_CHECKING:
    from .unions.object import Object, ObjectDict


class PipelineStep(SdkBaseModel):
    """All Of object, pipeline_step."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    uuid: Optional[str] = UNSET
    """The UUID identifying the step."""

    started_on: Optional[RFC3339DateTime] = UNSET
    """The timestamp when the step execution was started. This is not set when the step hasn't executed yet."""

    completed_on: Optional[RFC3339DateTime] = UNSET
    """The timestamp when the step execution was completed. This is not set if the step is still in progress."""

    state: Optional[Object] = UNSET
    """The current state of the step"""

    image: Optional[PipelineImage2] = UNSET
    """The Docker image used as the build container for the step."""

    setup_commands: Optional[list[PipelineCommand]] = UNSET
    """The list of commands that are executed as part of the setup phase of the build. These commands are executed
    outside the build container."""

    script_commands: Optional[list[PipelineCommand]] = UNSET
    """The list of build commands. These commands are executed in the build container."""


class PipelineStepDict(TypedDict):
    type_: NotRequired[str]
    uuid: NotRequired[str]
    started_on: NotRequired[RFC3339DateTime]
    completed_on: NotRequired[RFC3339DateTime]
    state: NotRequired[ObjectDict]
    image: NotRequired[PipelineImage2Dict]
    setup_commands: NotRequired[list[PipelineCommandDict]]
    script_commands: NotRequired[list[PipelineCommandDict]]
