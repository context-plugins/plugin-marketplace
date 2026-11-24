from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.current_execution_state import CurrentExecutionStateOrStr
from .google_cloud_apihub_v1_last_execution1 import (
    GoogleCloudApihubV1LastExecution1,
    GoogleCloudApihubV1LastExecution1Dict,
)


class GoogleCloudApihubV1ExecutionStatus1(SdkBaseModel):
    """Optional. The execution information for the plugin instance action done corresponding to an API hub instance."""

    current_execution_state: Optional[CurrentExecutionStateOrStr] = Field(default=UNSET, alias="currentExecutionState")
    """Output only. The current state of the execution."""

    last_execution: Optional[GoogleCloudApihubV1LastExecution1] = Field(default=UNSET, alias="lastExecution")
    """Output only. The last execution of the plugin instance."""


class GoogleCloudApihubV1ExecutionStatus1Dict(TypedDict):
    current_execution_state: NotRequired[CurrentExecutionStateOrStr]
    last_execution: NotRequired[GoogleCloudApihubV1LastExecution1Dict]
