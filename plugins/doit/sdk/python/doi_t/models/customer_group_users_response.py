from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .customer_group_user import CustomerGroupUser, CustomerGroupUserDict


class CustomerGroupUsersResponse(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    customer_group_id: str = Field(alias="customerGroupId")
    """Customer group the assignments belong to."""

    users: list[CustomerGroupUser]
    """Users assigned to the customer group, sorted by user ID."""


class CustomerGroupUsersResponseDict(TypedDict):
    customer_group_id: str
    users: list[CustomerGroupUserDict]
