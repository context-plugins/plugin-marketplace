from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class S3Config(SdkBaseModel):
    path: str = Field(alias="Path")
    """The path to an Amazon Simple Storage Service (Amazon S3) bucket or file(s) in an Amazon S3 bucket."""

    role_arn: str = Field(alias="RoleArn")
    """The ARN of the Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3
    bucket or files. If you provide a value for the KMSKeyArn key, the role must allow access to the key. Passing a role
    across Amazon Web Services accounts is not allowed. If you pass a role that isn't in your account, you get an
    InvalidInputException error."""

    kms_key_arn: Optional[str] = Field(default=UNSET, alias="KMSKeyArn")
    """The Amazon Resource Name (ARN) of an Key Management Service (KMS) key."""


class S3ConfigDict(TypedDict):
    path: str
    role_arn: str
    kms_key_arn: NotRequired[str]
