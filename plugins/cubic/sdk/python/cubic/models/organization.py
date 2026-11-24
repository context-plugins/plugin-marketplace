from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Organization(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    organization: str
    github_account_id: str = Field(alias="githubAccountId")
    can_view_billing: bool = Field(alias="canViewBilling")
    can_manage_seats: bool = Field(alias="canManageSeats")
    can_manage_roles: bool = Field(alias="canManageRoles")
    can_update_subscription: bool = Field(alias="canUpdateSubscription")
    can_update_flex_capacity: bool = Field(alias="canUpdateFlexCapacity")


class OrganizationDict(TypedDict):
    organization: str
    github_account_id: str
    can_view_billing: bool
    can_manage_seats: bool
    can_manage_roles: bool
    can_update_subscription: bool
    can_update_flex_capacity: bool
