from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.plans_current_get_responses_content_application_json_schema_plan_type import (
    PlansCurrentGetResponsesContentApplicationJsonSchemaPlanTypeOrStr,
)
from .plan_pricing import PlanPricing, PlanPricingDict
from .plans_current_get_responses_content_application_json_schema_plan_features_items import (
    PlansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItems,
    PlansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItemsDict,
)


class PlansCurrentGetResponsesContentApplicationJsonSchemaPlan(SdkBaseModel):
    """The plan details, or null if the customer has no active plan"""

    id: UUID
    """The unique identifier of the plan"""

    name: str
    """The name of the plan"""

    description: OptionalNullable[str] = UNSET
    """The description of the plan"""

    type_: PlansCurrentGetResponsesContentApplicationJsonSchemaPlanTypeOrStr = Field(alias="type")
    """The type of plan"""

    pricing: PlanPricing
    """The pricing configuration for a plan. Uses the same PricePoints structure as product pricing."""

    plan_group_id: UUID = Field(alias="planGroupId")
    """The plan group ID this plan belongs to"""

    next_plan_id: OptionalNullable[UUID] = Field(default=UNSET, alias="nextPlanId")
    """The ID of the next plan in the sequence"""

    prev_plan_id: OptionalNullable[UUID] = Field(default=UNSET, alias="prevPlanId")
    """The ID of the previous plan in the sequence"""

    features: list[PlansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItems]
    """The features (product-attribute pairs) included in this plan with usage and limits"""


class PlansCurrentGetResponsesContentApplicationJsonSchemaPlanDict(TypedDict):
    id: UUID
    name: str
    description: NotRequired[str | None]
    type_: PlansCurrentGetResponsesContentApplicationJsonSchemaPlanTypeOrStr
    pricing: PlanPricingDict
    plan_group_id: UUID
    next_plan_id: NotRequired[UUID | None]
    prev_plan_id: NotRequired[UUID | None]
    features: list[PlansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItemsDict]
