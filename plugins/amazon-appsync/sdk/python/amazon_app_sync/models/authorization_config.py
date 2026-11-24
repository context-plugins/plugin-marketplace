from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .aws_iam_config import AwsIamConfig, AwsIamConfigDict


class AuthorizationConfig(SdkBaseModel):
    authorization_type: Literal["AWS_IAM"] = Field(default="AWS_IAM", alias="authorizationType")
    """The authorization type that the HTTP endpoint requires. AWS_IAM: The authorization type is Signature Version 4
    (SigV4)."""

    aws_iam_config: Optional[AwsIamConfig] = Field(default=UNSET, alias="awsIamConfig")


class AuthorizationConfigDict(TypedDict):
    authorization_type: Literal["AWS_IAM"]
    aws_iam_config: NotRequired[AwsIamConfigDict]
