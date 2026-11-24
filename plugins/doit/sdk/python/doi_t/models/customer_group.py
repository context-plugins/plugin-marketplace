from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class CustomerGroup(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: str
    """Stable service-generated customer-group ID."""

    customer_id: str = Field(alias="customerId")
    """Authenticated tenant that owns the customer group."""

    name: str
    """Customer-visible customer-group name."""

    member_customer_ids: list[str] = Field(alias="memberCustomerIds")
    """Customer IDs that are members of this group."""

    created_by: str = Field(alias="createdBy")
    """User or service-account identifier that created the group."""

    time_created: RFC3339DateTime = Field(alias="timeCreated")
    """Time the group was created."""

    time_modified: RFC3339DateTime = Field(alias="timeModified")
    """Time the group was last modified."""


class CustomerGroupDict(TypedDict):
    id: str
    customer_id: str
    name: str
    member_customer_ids: list[str]
    created_by: str
    time_created: RFC3339DateTime
    time_modified: RFC3339DateTime
