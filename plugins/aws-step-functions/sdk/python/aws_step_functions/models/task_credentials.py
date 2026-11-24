from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TaskCredentials(SdkBaseModel):
    role_arn: Optional[str] = Field(default=UNSET, alias="roleArn")
    """The ARN of an IAM role that Step Functions assumes for the task. The role can allow cross-account access to
    resources."""


class TaskCredentialsDict(TypedDict):
    role_arn: NotRequired[str]
