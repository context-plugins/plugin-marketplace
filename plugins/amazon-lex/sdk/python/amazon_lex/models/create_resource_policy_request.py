from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CreateResourcePolicyRequest(SdkBaseModel):
    resource_arn: str = Field(alias="resourceArn")
    """The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to."""

    policy: str
    """A resource policy to add to the resource. The policy is a JSON structure that contains one or more statements
    that define the policy. The policy must follow the IAM syntax. For more information about the contents of a JSON
    policy document, see IAM JSON policy reference . If the policy isn't valid, Amazon Lex returns a validation
    exception."""


class CreateResourcePolicyRequestDict(TypedDict):
    resource_arn: str
    policy: str
