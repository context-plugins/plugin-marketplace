from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class PlanPlanProductsItemsPlanProductAttributeItems(SdkBaseModel):
    id: Optional[UUID] = UNSET
    organization_id: Optional[UUID] = Field(default=UNSET, alias="organizationId")
    plan_product_id: Optional[UUID] = Field(default=UNSET, alias="planProductId")
    product_attribute_id: Optional[UUID] = Field(default=UNSET, alias="productAttributeId")
    pricing: Optional[dict[str, Any]] = UNSET
    """The pricing configuration for this attribute"""

    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    updated_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")


class PlanPlanProductsItemsPlanProductAttributeItemsDict(TypedDict):
    id: NotRequired[UUID]
    organization_id: NotRequired[UUID]
    plan_product_id: NotRequired[UUID]
    product_attribute_id: NotRequired[UUID]
    pricing: NotRequired[dict[str, Any]]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
