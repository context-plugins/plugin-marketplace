from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .customer_group_user_group import CustomerGroupUserGroup, CustomerGroupUserGroupDict


class CustomerGroupUserGroupsResponse(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    customer_group_id: str = Field(alias="customerGroupId")
    """Customer group the assignments belong to."""

    user_groups: list[CustomerGroupUserGroup] = Field(alias="userGroups")
    """User groups assigned to the customer group, sorted by user-group ID."""


class CustomerGroupUserGroupsResponseDict(TypedDict):
    customer_group_id: str
    user_groups: list[CustomerGroupUserGroupDict]
