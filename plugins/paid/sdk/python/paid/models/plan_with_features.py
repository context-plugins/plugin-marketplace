from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.plan_type import PlanTypeOrStr
from .plan_pricing import PlanPricing, PlanPricingDict
from .plan_with_features_features_items import PlanWithFeaturesFeaturesItems, PlanWithFeaturesFeaturesItemsDict


class PlanWithFeatures(SdkBaseModel):
    """A plan with its features (product-attribute pairs) for display"""

    id: UUID
    """The unique identifier of the plan"""

    name: str
    """The name of the plan"""

    description: OptionalNullable[str] = UNSET
    """The description of the plan"""

    type_: PlanTypeOrStr = Field(alias="type")
    """The type of plan (flat for fixed pricing, usage for usage-based, credit for prepaid credits)"""

    pricing: PlanPricing
    """The pricing configuration for a plan. Uses the same PricePoints structure as product pricing."""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    """When the plan was created"""

    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    """When the plan was last updated"""

    next_plan_id: OptionalNullable[UUID] = Field(default=UNSET, alias="nextPlanId")
    """The ID of the next plan in the sequence"""

    prev_plan_id: OptionalNullable[UUID] = Field(default=UNSET, alias="prevPlanId")
    """The ID of the previous plan in the sequence"""

    features: list[PlanWithFeaturesFeaturesItems]
    """The features (product-attribute pairs) included in this plan"""


class PlanWithFeaturesDict(TypedDict):
    id: UUID
    name: str
    description: NotRequired[str | None]
    type_: PlanTypeOrStr
    pricing: PlanPricingDict
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    next_plan_id: NotRequired[UUID | None]
    prev_plan_id: NotRequired[UUID | None]
    features: list[PlanWithFeaturesFeaturesItemsDict]
