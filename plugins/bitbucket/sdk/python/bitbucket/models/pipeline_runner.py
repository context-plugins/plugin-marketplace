from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .pipeline_runner_oauth_client2 import PipelineRunnerOauthClient2, PipelineRunnerOauthClient2Dict
from .pipeline_runner_state2 import PipelineRunnerState2, PipelineRunnerState2Dict


class PipelineRunner(SdkBaseModel):
    """All Of object, pipeline_runner."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    uuid: Optional[str] = UNSET
    """The UUID identifying the runner."""

    name: Optional[str] = UNSET
    """The name of the runner."""

    labels: Optional[list[str]] = UNSET
    """Labels assigned to the runner for identification and routing."""

    state: Optional[PipelineRunnerState2] = UNSET
    """The current state of the runner."""

    created_on: Optional[RFC3339DateTime] = UNSET
    """The timestamp when the runner was created."""

    updated_on: Optional[RFC3339DateTime] = UNSET
    """The timestamp when the runner was last updated."""

    oauth_client: Optional[PipelineRunnerOauthClient2] = UNSET
    """OAuth client configuration for the runner."""


class PipelineRunnerDict(TypedDict):
    type_: NotRequired[str]
    uuid: NotRequired[str]
    name: NotRequired[str]
    labels: NotRequired[list[str]]
    state: NotRequired[PipelineRunnerState2Dict]
    created_on: NotRequired[RFC3339DateTime]
    updated_on: NotRequired[RFC3339DateTime]
    oauth_client: NotRequired[PipelineRunnerOauthClient2Dict]
