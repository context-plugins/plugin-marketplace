from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PutResourcePolicyRequest(SdkBaseModel):
    resource_arn: str = Field(alias="ResourceArn")
    """The Amazon Resource Name (ARN) of the custom model to attach the policy to."""

    resource_policy: str = Field(alias="ResourcePolicy")
    r"""The JSON resource-based policy to attach to your custom model. Provide your JSON as a UTF-8 encoded string
    without line breaks. To provide valid JSON for your policy, enclose the attribute names and values in double quotes.
    If the JSON body is also enclosed in double quotes, then you must escape the double quotes that are inside the
    policy: "{\"attribute\": \"value\", \"attribute\": [\"value\"]}" To avoid escaping quotes, you can use single quotes
    to enclose the policy and double quotes to enclose the JSON names and values: '{"attribute": "value", "attribute":
    ["value"]}'"""

    policy_revision_id: Optional[str] = Field(default=UNSET, alias="PolicyRevisionId")
    """The revision ID that Amazon Comprehend assigned to the policy that you are updating. If you are creating a new
    policy that has no prior version, don't use this parameter. Amazon Comprehend creates the revision ID for you."""


class PutResourcePolicyRequestDict(TypedDict):
    resource_arn: str
    resource_policy: str
    policy_revision_id: NotRequired[str]
