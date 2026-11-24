from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CloudWatchLogsConfiguration(SdkBaseModel):
    spans_log_group_kms_key_id: Optional[str] = Field(default=UNSET, alias="SpansLogGroupKmsKeyId")
    """The ARN of an AWS Key Management Service (AWS KMS) key that you create and manage, in the same account and
    Region, used to encrypt the aws/spans log group. Key IDs and alias ARNs are not supported. X-Ray applies the key
    only when it creates aws/spans. If the account already has an aws/spans log group, X-Ray fails the request with an
    InvalidRequestException and does not change the log group. To enable Transaction Search with the existing log group
    as it is, call UpdateTraceSegmentDestination again without SpansLogGroupKmsKeyId. To set or change the key of the
    existing log group, use the CloudWa"""


class CloudWatchLogsConfigurationDict(TypedDict):
    spans_log_group_kms_key_id: NotRequired[str]
