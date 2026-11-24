from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.plan_type import PlanTypeOrStr
from .plan_plan_products_items import PlanPlanProductsItems, PlanPlanProductsItemsDict
from .plan_pricing import PlanPricing, PlanPricingDict


class Plan(SdkBaseModel):
    """A plan containing products and their attributes"""

    id: UUID
    """The unique identifier of the plan"""

    organization_id: UUID = Field(alias="organizationId")
    """The organization ID that owns this plan"""

    plan_group_id: UUID = Field(alias="planGroupId")
    """The plan group ID this plan belongs to"""

    name: str
    """The name of the plan"""

    description: OptionalNullable[str] = UNSET
    """The description of the plan"""

    type_: PlanTypeOrStr = Field(alias="type")
    """The type of plan (flat for fixed pricing, usage for usage-based, credit for prepaid credits)"""

    pricing: PlanPricing
    """The pricing configuration for a plan. Uses the same PricePoints structure as product pricing."""

    next_plan_id: OptionalNullable[UUID] = Field(default=UNSET, alias="nextPlanId")
    """The ID of the next plan in the sequence"""

    prev_plan_id: OptionalNullable[UUID] = Field(default=UNSET, alias="prevPlanId")
    """The ID of the previous plan in the sequence"""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    """When the plan was created"""

    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    """When the plan was last updated"""

    plan_products: Optional[list[PlanPlanProductsItems]] = Field(default=UNSET, alias="planProducts")
    """The products included in this plan"""


class PlanDict(TypedDict):
    id: UUID
    organization_id: UUID
    plan_group_id: UUID
    name: str
    description: NotRequired[str | None]
    type_: PlanTypeOrStr
    pricing: PlanPricingDict
    next_plan_id: NotRequired[UUID | None]
    prev_plan_id: NotRequired[UUID | None]
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    plan_products: NotRequired[list[PlanPlanProductsItemsDict]]
