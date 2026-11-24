from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GetResourcePolicyInput(SdkBaseModel):
    resource_arn: str = Field(alias="resourceArn")
    """The ARN of the resource that is associated with the resource policy."""


class GetResourcePolicyInputDict(TypedDict):
    resource_arn: str
