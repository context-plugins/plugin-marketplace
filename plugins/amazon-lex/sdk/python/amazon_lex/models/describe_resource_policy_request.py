from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeResourcePolicyRequest(SdkBaseModel):
    resource_arn: str = Field(alias="resourceArn")
    """The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to."""


class DescribeResourcePolicyRequestDict(TypedDict):
    resource_arn: str
