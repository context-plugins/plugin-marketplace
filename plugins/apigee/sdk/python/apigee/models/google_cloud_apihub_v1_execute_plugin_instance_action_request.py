from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_action_execution_detail2 import (
    GoogleCloudApihubV1ActionExecutionDetail2,
    GoogleCloudApihubV1ActionExecutionDetail2Dict,
)


class GoogleCloudApihubV1ExecutePluginInstanceActionRequest(SdkBaseModel):
    """The ExecutePluginInstanceAction method's request."""

    action_execution_detail: Optional[GoogleCloudApihubV1ActionExecutionDetail2] = Field(
        default=UNSET, alias="actionExecutionDetail"
    )
    """Required. The execution details for the action to execute."""


class GoogleCloudApihubV1ExecutePluginInstanceActionRequestDict(TypedDict):
    action_execution_detail: NotRequired[GoogleCloudApihubV1ActionExecutionDetail2Dict]
