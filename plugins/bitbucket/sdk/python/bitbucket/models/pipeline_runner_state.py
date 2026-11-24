from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status_bitbucket_pipelines_api import StatusBitbucketPipelinesApiOrStr
from .pipeline_runner_version2 import PipelineRunnerVersion2, PipelineRunnerVersion2Dict


class PipelineRunnerState(SdkBaseModel):
    """All Of object, pipeline_runner_state."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    status: Optional[StatusBitbucketPipelinesApiOrStr] = UNSET
    """The current status of the runner."""

    version: Optional[PipelineRunnerVersion2] = UNSET
    """Version information for the runner."""

    updated_on: Optional[RFC3339DateTime] = UNSET
    """The timestamp when the runner state was last updated."""

    cordoned: Optional[bool] = UNSET
    """Whether the runner is cordoned (prevented from accepting new steps)."""


class PipelineRunnerStateDict(TypedDict):
    type_: NotRequired[str]
    status: NotRequired[StatusBitbucketPipelinesApiOrStr]
    version: NotRequired[PipelineRunnerVersion2Dict]
    updated_on: NotRequired[RFC3339DateTime]
    cordoned: NotRequired[bool]
