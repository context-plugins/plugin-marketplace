from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .plan_attribute_input import PlanAttributeInput, PlanAttributeInputDict


class CreatePlanRequest(SdkBaseModel):
    product_id: str = Field(alias="productId")
    """Paid product ID, for example ``prod_abc123``"""

    name: OptionalNullable[str] = UNSET
    external_id: OptionalNullable[str] = Field(default=UNSET, alias="externalId")
    """Your stable identifier for this plan"""

    supported_currencies: Optional[list[str]] = Field(default=UNSET, alias="supportedCurrencies")
    is_default: Optional[bool] = Field(default=UNSET, alias="isDefault")
    attributes: list[PlanAttributeInput]


class CreatePlanRequestDict(TypedDict):
    product_id: str
    name: NotRequired[str | None]
    external_id: NotRequired[str | None]
    supported_currencies: NotRequired[list[str]]
    is_default: NotRequired[bool]
    attributes: list[PlanAttributeInputDict]
