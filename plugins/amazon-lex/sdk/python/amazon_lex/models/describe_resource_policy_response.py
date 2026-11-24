from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DescribeResourcePolicyResponse(SdkBaseModel):
    resource_arn: Optional[str] = Field(default=UNSET, alias="resourceArn")
    """The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to."""

    policy: Optional[str] = UNSET
    """The JSON structure that contains the resource policy. For more information about the contents of a JSON policy
    document, see IAM JSON policy reference ."""

    revision_id: Optional[str] = Field(default=UNSET, alias="revisionId")
    """The current revision of the resource policy. Use the revision ID to make sure that you are updating the most
    current version of a resource policy when you add a policy statement to a resource, delete a resource, or update a
    resource."""


class DescribeResourcePolicyResponseDict(TypedDict):
    resource_arn: NotRequired[str]
    policy: NotRequired[str]
    revision_id: NotRequired[str]
