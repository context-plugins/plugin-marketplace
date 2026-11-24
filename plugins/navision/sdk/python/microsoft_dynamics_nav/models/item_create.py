from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_dynamics365_business_central_api_v20_items_api import TypeDynamics365BusinessCentralApiV20ItemsApiOrStr


class ItemCreate(SdkBaseModel):
    number: Optional[str] = UNSET
    display_name: str = Field(alias="displayName")
    type_: Optional[TypeDynamics365BusinessCentralApiV20ItemsApiOrStr] = Field(default=UNSET, alias="type")
    item_category_code: Optional[str] = Field(default=UNSET, alias="itemCategoryCode")
    blocked: Optional[bool] = UNSET
    gtin: Optional[str] = UNSET
    unit_price: Optional[float] = Field(default=UNSET, alias="unitPrice")
    unit_cost: Optional[float] = Field(default=UNSET, alias="unitCost")
    tax_group_code: Optional[str] = Field(default=UNSET, alias="taxGroupCode")
    base_unit_of_measure_code: Optional[str] = Field(default=UNSET, alias="baseUnitOfMeasureCode")


class ItemCreateDict(TypedDict):
    number: NotRequired[str]
    display_name: str
    type_: NotRequired[TypeDynamics365BusinessCentralApiV20ItemsApiOrStr]
    item_category_code: NotRequired[str]
    blocked: NotRequired[bool]
    gtin: NotRequired[str]
    unit_price: NotRequired[float]
    unit_cost: NotRequired[float]
    tax_group_code: NotRequired[str]
    base_unit_of_measure_code: NotRequired[str]
