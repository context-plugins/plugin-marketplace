from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class EncryptionConfig(SdkBaseModel):
    role_arn: str = Field(alias="RoleArn")
    """The ARN of the IAM role that Amazon Forecast can assume to access the KMS key. Passing a role across Amazon Web
    Services accounts is not allowed. If you pass a role that isn't in your account, you get an InvalidInputException
    error."""

    kms_key_arn: str = Field(alias="KMSKeyArn")
    """The Amazon Resource Name (ARN) of the KMS key."""


class EncryptionConfigDict(TypedDict):
    role_arn: str
    kms_key_arn: str
