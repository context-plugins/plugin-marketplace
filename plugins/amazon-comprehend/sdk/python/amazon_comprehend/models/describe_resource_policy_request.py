from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeResourcePolicyRequest(SdkBaseModel):
    resource_arn: str = Field(alias="ResourceArn")
    """The Amazon Resource Name (ARN) of the custom model version that has the resource policy."""


class DescribeResourcePolicyRequestDict(TypedDict):
    resource_arn: str
