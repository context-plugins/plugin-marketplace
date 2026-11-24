from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .plan import Plan, PlanDict


class PlanGroup(SdkBaseModel):
    """A plan group containing multiple plans"""

    id: UUID
    """The unique identifier of the plan group"""

    organization_id: UUID = Field(alias="organizationId")
    """The organization ID that owns this plan group"""

    name: str
    """The name of the plan group"""

    description: OptionalNullable[str] = UNSET
    """The description of the plan group"""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    """When the plan group was created"""

    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    """When the plan group was last updated"""

    plans: Optional[list[Plan]] = UNSET
    """The plans included in this plan group"""


class PlanGroupDict(TypedDict):
    id: UUID
    organization_id: UUID
    name: str
    description: NotRequired[str | None]
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    plans: NotRequired[list[PlanDict]]
