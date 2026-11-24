from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PipelineRunnerVersion2(SdkBaseModel):
    """All Of object, pipeline_runner_version2."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    version: Optional[str] = UNSET
    """The currently installed version of the runner."""

    current: Optional[str] = UNSET
    """The current recommended version of the runner."""


class PipelineRunnerVersion2Dict(TypedDict):
    type_: NotRequired[str]
    version: NotRequired[str]
    current: NotRequired[str]
