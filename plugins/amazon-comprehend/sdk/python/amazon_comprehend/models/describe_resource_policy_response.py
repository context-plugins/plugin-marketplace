from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class DescribeResourcePolicyResponse(SdkBaseModel):
    resource_policy: Optional[str] = Field(default=UNSET, alias="ResourcePolicy")
    """The JSON body of the resource-based policy."""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """The time at which the policy was created."""

    last_modified_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastModifiedTime")
    """The time at which the policy was last modified."""

    policy_revision_id: Optional[str] = Field(default=UNSET, alias="PolicyRevisionId")
    """The revision ID of the policy. Each time you modify a policy, Amazon Comprehend assigns a new revision ID, and it
    deletes the prior version of the policy."""


class DescribeResourcePolicyResponseDict(TypedDict):
    resource_policy: NotRequired[str]
    creation_time: NotRequired[RFC3339DateTime]
    last_modified_time: NotRequired[RFC3339DateTime]
    policy_revision_id: NotRequired[str]
