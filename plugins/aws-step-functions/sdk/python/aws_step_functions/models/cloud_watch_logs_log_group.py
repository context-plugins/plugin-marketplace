from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CloudWatchLogsLogGroup(SdkBaseModel):
    log_group_arn: Optional[str] = Field(default=UNSET, alias="logGroupArn")
    """The ARN of the the CloudWatch log group to which you want your logs emitted to. The ARN must end with :*"""


class CloudWatchLogsLogGroupDict(TypedDict):
    log_group_arn: NotRequired[str]
