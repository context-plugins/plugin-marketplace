from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class ResourcePolicy(SdkBaseModel):
    policy_name: Optional[str] = Field(default=UNSET, alias="PolicyName")
    """The name of the resource policy. Must be unique within a specific Amazon Web Services account."""

    policy_document: Optional[str] = Field(default=UNSET, alias="PolicyDocument")
    """The resource policy document, which can be up to 5kb in size."""

    policy_revision_id: Optional[str] = Field(default=UNSET, alias="PolicyRevisionId")
    """Returns the current policy revision id for this policy name."""

    last_updated_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastUpdatedTime")
    """When the policy was last updated, in Unix time seconds."""


class ResourcePolicyDict(TypedDict):
    policy_name: NotRequired[str]
    policy_document: NotRequired[str]
    policy_revision_id: NotRequired[str]
    last_updated_time: NotRequired[RFC3339DateTime]
