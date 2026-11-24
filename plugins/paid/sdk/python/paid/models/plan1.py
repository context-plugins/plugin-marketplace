from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.plan_status import PlanStatusOrStr
from .plan_attribute import PlanAttribute, PlanAttributeDict


class Plan1(SdkBaseModel):
    id: str
    product_id: str = Field(alias="productId")
    name: str | None
    external_id: str | None = Field(alias="externalId")
    supported_currencies: list[str] = Field(alias="supportedCurrencies")
    is_default: bool = Field(alias="isDefault")
    status: PlanStatusOrStr
    upgrade_path_order: float | None = Field(alias="upgradePathOrder")
    archived_at: RFC3339DateTime | None = Field(alias="archivedAt")
    created_at: RFC3339DateTime = Field(alias="createdAt")
    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    attributes: list[PlanAttribute]


class Plan1Dict(TypedDict):
    id: str
    product_id: str
    name: str | None
    external_id: str | None
    supported_currencies: list[str]
    is_default: bool
    status: PlanStatusOrStr
    upgrade_path_order: float | None
    archived_at: RFC3339DateTime | None
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    attributes: list[PlanAttributeDict]
