from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cloud_watch_logs_config import CloudWatchLogsConfig, CloudWatchLogsConfigDict
from .s3_logs_config import S3LogsConfig, S3LogsConfigDict


class LogsLocation(SdkBaseModel):
    group_name: Optional[str] = Field(default=UNSET, alias="groupName")
    """The name of the CloudWatch Logs group for the build logs."""

    stream_name: Optional[str] = Field(default=UNSET, alias="streamName")
    """The name of the CloudWatch Logs stream for the build logs."""

    deep_link: Optional[str] = Field(default=UNSET, alias="deepLink")
    """The URL to an individual build log in CloudWatch Logs. The log stream is created during the PROVISIONING phase of
    a build and the deeplink will not be valid until it is created."""

    s3_deep_link: Optional[str] = Field(default=UNSET, alias="s3DeepLink")
    """The URL to a build log in an S3 bucket."""

    cloud_watch_logs_arn: Optional[str] = Field(default=UNSET, alias="cloudWatchLogsArn")
    """The ARN of the CloudWatch Logs stream for a build execution. Its format is
    arn:${Partition}:logs:${Region}:${Account}:log-group:${LogGroupName}:log-stream:${LogStreamName}. The CloudWatch
    Logs stream is created during the PROVISIONING phase of a build and the ARN will not be valid until it is created.
    For more information, see Resources Defined by CloudWatch Logs."""

    s3_logs_arn: Optional[str] = Field(default=UNSET, alias="s3LogsArn")
    """The ARN of S3 logs for a build project. Its format is arn:${Partition}:s3:::${BucketName}/${ObjectName}. For more
    information, see Resources Defined by Amazon S3."""

    cloud_watch_logs: Optional[CloudWatchLogsConfig] = Field(default=UNSET, alias="cloudWatchLogs")
    s3_logs: Optional[S3LogsConfig] = Field(default=UNSET, alias="s3Logs")


class LogsLocationDict(TypedDict):
    group_name: NotRequired[str]
    stream_name: NotRequired[str]
    deep_link: NotRequired[str]
    s3_deep_link: NotRequired[str]
    cloud_watch_logs_arn: NotRequired[str]
    s3_logs_arn: NotRequired[str]
    cloud_watch_logs: NotRequired[CloudWatchLogsConfigDict]
    s3_logs: NotRequired[S3LogsConfigDict]
