from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .plan_plan_products_items_plan_product_attribute_items import (
    PlanPlanProductsItemsPlanProductAttributeItems,
    PlanPlanProductsItemsPlanProductAttributeItemsDict,
)
from .product2 import Product2, Product2Dict


class PlanPlanProductsItems(SdkBaseModel):
    id: Optional[UUID] = UNSET
    organization_id: Optional[UUID] = Field(default=UNSET, alias="organizationId")
    plan_id: Optional[UUID] = Field(default=UNSET, alias="planId")
    product_id: Optional[UUID] = Field(default=UNSET, alias="productId")
    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    updated_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")
    product: Optional[Product2] = UNSET
    """The product associated with this plan product"""

    plan_product_attribute: Optional[list[PlanPlanProductsItemsPlanProductAttributeItems]] = Field(
        default=UNSET, alias="planProductAttribute"
    )
    """The product attributes with pricing for this plan"""


class PlanPlanProductsItemsDict(TypedDict):
    id: NotRequired[UUID]
    organization_id: NotRequired[UUID]
    plan_id: NotRequired[UUID]
    product_id: NotRequired[UUID]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
    product: NotRequired[Product2Dict]
    plan_product_attribute: NotRequired[list[PlanPlanProductsItemsPlanProductAttributeItemsDict]]
