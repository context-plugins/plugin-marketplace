from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .resource_policy import ResourcePolicy, ResourcePolicyDict


class ListResourcePoliciesResult(SdkBaseModel):
    resource_policies: Optional[list[ResourcePolicy]] = Field(default=UNSET, alias="ResourcePolicies")
    """The list of resource policies in the target Amazon Web Services account."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Pagination token. Not currently supported."""


class ListResourcePoliciesResultDict(TypedDict):
    resource_policies: NotRequired[list[ResourcePolicyDict]]
    next_token: NotRequired[str]
