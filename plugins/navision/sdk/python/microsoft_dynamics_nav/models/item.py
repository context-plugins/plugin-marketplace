from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.type2_dynamics365_business_central_api_v20_items_api import (
    Type2Dynamics365BusinessCentralApiV20ItemsApiOrStr,
)


class Item(SdkBaseModel):
    odata_etag: Optional[str] = Field(default=UNSET, alias="@odata.etag")
    id: Optional[UUID] = UNSET
    """The unique identifier of the item"""

    number: Optional[str] = UNSET
    """The item number"""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """The item display name"""

    display_name2: Optional[str] = Field(default=UNSET, alias="displayName2")
    """The item display name 2"""

    type_: Optional[Type2Dynamics365BusinessCentralApiV20ItemsApiOrStr] = Field(default=UNSET, alias="type")
    """The item type"""

    item_category_id: Optional[UUID] = Field(default=UNSET, alias="itemCategoryId")
    """The item category ID"""

    item_category_code: Optional[str] = Field(default=UNSET, alias="itemCategoryCode")
    """The item category code"""

    blocked: Optional[bool] = UNSET
    """Whether the item is blocked"""

    gtin: Optional[str] = UNSET
    """The Global Trade Item Number"""

    inventory: Optional[float] = UNSET
    """The current inventory quantity"""

    unit_price: Optional[float] = Field(default=UNSET, alias="unitPrice")
    """The unit price"""

    price_includes_tax: Optional[bool] = Field(default=UNSET, alias="priceIncludesTax")
    """Whether the price includes tax"""

    unit_cost: Optional[float] = Field(default=UNSET, alias="unitCost")
    """The unit cost"""

    tax_group_id: Optional[UUID] = Field(default=UNSET, alias="taxGroupId")
    """The tax group ID"""

    tax_group_code: Optional[str] = Field(default=UNSET, alias="taxGroupCode")
    """The tax group code"""

    base_unit_of_measure_id: Optional[UUID] = Field(default=UNSET, alias="baseUnitOfMeasureId")
    """The base unit of measure ID"""

    base_unit_of_measure_code: Optional[str] = Field(default=UNSET, alias="baseUnitOfMeasureCode")
    """The base unit of measure code"""

    general_product_posting_group_id: Optional[UUID] = Field(default=UNSET, alias="generalProductPostingGroupId")
    general_product_posting_group_code: Optional[str] = Field(default=UNSET, alias="generalProductPostingGroupCode")
    inventory_posting_group_id: Optional[UUID] = Field(default=UNSET, alias="inventoryPostingGroupId")
    inventory_posting_group_code: Optional[str] = Field(default=UNSET, alias="inventoryPostingGroupCode")
    last_modified_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastModifiedDateTime")


class ItemDict(TypedDict):
    odata_etag: NotRequired[str]
    id: NotRequired[UUID]
    number: NotRequired[str]
    display_name: NotRequired[str]
    display_name2: NotRequired[str]
    type_: NotRequired[Type2Dynamics365BusinessCentralApiV20ItemsApiOrStr]
    item_category_id: NotRequired[UUID]
    item_category_code: NotRequired[str]
    blocked: NotRequired[bool]
    gtin: NotRequired[str]
    inventory: NotRequired[float]
    unit_price: NotRequired[float]
    price_includes_tax: NotRequired[bool]
    unit_cost: NotRequired[float]
    tax_group_id: NotRequired[UUID]
    tax_group_code: NotRequired[str]
    base_unit_of_measure_id: NotRequired[UUID]
    base_unit_of_measure_code: NotRequired[str]
    general_product_posting_group_id: NotRequired[UUID]
    general_product_posting_group_code: NotRequired[str]
    inventory_posting_group_id: NotRequired[UUID]
    inventory_posting_group_code: NotRequired[str]
    last_modified_date_time: NotRequired[RFC3339DateTime]
