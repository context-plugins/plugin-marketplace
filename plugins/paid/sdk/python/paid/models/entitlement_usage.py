from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class EntitlementUsage(SdkBaseModel):
    """Tracks the usage of an entitlement for a customer"""

    id: UUID
    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    updated_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")
    organization_id: UUID = Field(alias="organizationId")
    product_id: UUID = Field(alias="productId")
    entitlement_id: UUID = Field(alias="entitlementId")
    customer_id: UUID = Field(alias="customerId")
    start_date: RFC3339DateTime = Field(alias="startDate")
    end_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="endDate")
    total: int
    """Total entitlement amount"""

    available: int
    """Available entitlement amount"""

    used: int
    """Used entitlement amount"""


class EntitlementUsageDict(TypedDict):
    id: UUID
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
    organization_id: UUID
    product_id: UUID
    entitlement_id: UUID
    customer_id: UUID
    start_date: RFC3339DateTime
    end_date: NotRequired[RFC3339DateTime | None]
    total: int
    available: int
    used: int
