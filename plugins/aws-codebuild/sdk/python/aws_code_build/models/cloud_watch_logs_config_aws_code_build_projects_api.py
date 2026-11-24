from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status1_aws_code_build_projects_api import Status1AwsCodeBuildProjectsApiOrStr


class CloudWatchLogsConfigAwsCodeBuildProjectsApi(SdkBaseModel):
    status: Status1AwsCodeBuildProjectsApiOrStr
    """The current status of the logs in CloudWatch Logs for a build project. Valid values are: ENABLED: CloudWatch Logs
    are enabled for this build project. DISABLED: CloudWatch Logs are not enabled for this build project."""

    group_name: Optional[str] = Field(default=UNSET, alias="groupName")
    """The group name of the logs in CloudWatch Logs. For more information, see Working with Log Groups and Log
    Streams."""

    stream_name: Optional[str] = Field(default=UNSET, alias="streamName")
    """The prefix of the stream name of the CloudWatch Logs. For more information, see Working with Log Groups and Log
    Streams."""


class CloudWatchLogsConfigAwsCodeBuildProjectsApiDict(TypedDict):
    status: Status1AwsCodeBuildProjectsApiOrStr
    group_name: NotRequired[str]
    stream_name: NotRequired[str]
