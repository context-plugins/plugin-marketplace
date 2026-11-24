from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.product_non_inventory_type import ProductNonInventoryTypeOrInt
from .enums.product_types import ProductTypesOrInt
from .enums.vat_types import VatTypesOrInt
from .i_stock_card import IStockCard, IStockCardDict


class IProductResult(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: Optional[int] = UNSET
    type_: Optional[ProductTypesOrInt] = Field(default=UNSET, alias="type")
    """1 = Service 3 = ProductWithNoStock 5 = ProductWithStock"""

    code: OptionalNullable[str] = UNSET
    name: OptionalNullable[str] = UNSET
    barcode: OptionalNullable[str] = UNSET
    buy_vat_type: Optional[VatTypesOrInt] = Field(default=UNSET, alias="buyVatType")
    """1 = Include 3 = Exclude 5 = Zero 7 = None"""

    buy_price: Optional[float] = Field(default=UNSET, alias="buyPrice")
    buy_price_with_vat: Optional[float] = Field(default=UNSET, alias="buyPriceWithVat")
    buy_description: OptionalNullable[str] = Field(default=UNSET, alias="buyDescription")
    buy_chart_of_account_id: OptionalNullable[int] = Field(default=UNSET, alias="buyChartOfAccountId")
    buy_chart_of_account_code: OptionalNullable[str] = Field(default=UNSET, alias="buyChartOfAccountCode")
    buy_chart_of_account_name_local: OptionalNullable[str] = Field(default=UNSET, alias="buyChartOfAccountNameLocal")
    buy_chart_of_account_name_foreign: OptionalNullable[str] = Field(
        default=UNSET, alias="buyChartOfAccountNameForeign"
    )
    sell_vat_type: Optional[VatTypesOrInt] = Field(default=UNSET, alias="sellVatType")
    """1 = Include 3 = Exclude 5 = Zero 7 = None"""

    sell_price: Optional[float] = Field(default=UNSET, alias="sellPrice")
    sell_price_with_vat: Optional[float] = Field(default=UNSET, alias="sellPriceWithVat")
    sell_description: OptionalNullable[str] = Field(default=UNSET, alias="sellDescription")
    sell_chart_of_account_id: OptionalNullable[int] = Field(default=UNSET, alias="sellChartOfAccountId")
    sell_chart_of_account_code: OptionalNullable[str] = Field(default=UNSET, alias="sellChartOfAccountCode")
    sell_chart_of_account_name_local: OptionalNullable[str] = Field(default=UNSET, alias="sellChartOfAccountNameLocal")
    sell_chart_of_account_name_foreign: OptionalNullable[str] = Field(
        default=UNSET, alias="sellChartOfAccountNameForeign"
    )
    category_id: OptionalNullable[int] = Field(default=UNSET, alias="categoryId")
    category_name: OptionalNullable[str] = Field(default=UNSET, alias="categoryName")
    unit_id: OptionalNullable[int] = Field(default=UNSET, alias="unitId")
    unit_name: OptionalNullable[str] = Field(default=UNSET, alias="unitName")
    product_non_inventory_type: Optional[ProductNonInventoryTypeOrInt] = Field(
        default=UNSET, alias="productNonInventoryType"
    )
    brought_forward_on: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="broughtForwardOn")
    inventory_published_on: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="inventoryPublishedOn")
    inventory_quantity: OptionalNullable[float] = Field(default=UNSET, alias="inventoryQuantity")
    inventory_price: OptionalNullable[float] = Field(default=UNSET, alias="inventoryPrice")
    inventory_total: OptionalNullable[float] = Field(default=UNSET, alias="inventoryTotal")
    inventory_remark: OptionalNullable[str] = Field(default=UNSET, alias="inventoryRemark")
    average_buy_price: OptionalNullable[float] = Field(default=UNSET, alias="averageBuyPrice")
    average_sell_price: OptionalNullable[float] = Field(default=UNSET, alias="averageSellPrice")
    remaining_stock: OptionalNullable[float] = Field(default=UNSET, alias="remainingStock")
    total_value_in_hand: OptionalNullable[float] = Field(default=UNSET, alias="totalValueInHand")
    stock_card: OptionalNullable[list[IStockCard]] = Field(default=UNSET, alias="stockCard")


class IProductResultDict(TypedDict):
    id: NotRequired[int]
    type_: NotRequired[ProductTypesOrInt]
    code: NotRequired[str | None]
    name: NotRequired[str | None]
    barcode: NotRequired[str | None]
    buy_vat_type: NotRequired[VatTypesOrInt]
    buy_price: NotRequired[float]
    buy_price_with_vat: NotRequired[float]
    buy_description: NotRequired[str | None]
    buy_chart_of_account_id: NotRequired[int | None]
    buy_chart_of_account_code: NotRequired[str | None]
    buy_chart_of_account_name_local: NotRequired[str | None]
    buy_chart_of_account_name_foreign: NotRequired[str | None]
    sell_vat_type: NotRequired[VatTypesOrInt]
    sell_price: NotRequired[float]
    sell_price_with_vat: NotRequired[float]
    sell_description: NotRequired[str | None]
    sell_chart_of_account_id: NotRequired[int | None]
    sell_chart_of_account_code: NotRequired[str | None]
    sell_chart_of_account_name_local: NotRequired[str | None]
    sell_chart_of_account_name_foreign: NotRequired[str | None]
    category_id: NotRequired[int | None]
    category_name: NotRequired[str | None]
    unit_id: NotRequired[int | None]
    unit_name: NotRequired[str | None]
    product_non_inventory_type: NotRequired[ProductNonInventoryTypeOrInt]
    brought_forward_on: NotRequired[RFC3339DateTime | None]
    inventory_published_on: NotRequired[RFC3339DateTime | None]
    inventory_quantity: NotRequired[float | None]
    inventory_price: NotRequired[float | None]
    inventory_total: NotRequired[float | None]
    inventory_remark: NotRequired[str | None]
    average_buy_price: NotRequired[float | None]
    average_sell_price: NotRequired[float | None]
    remaining_stock: NotRequired[float | None]
    total_value_in_hand: NotRequired[float | None]
    stock_card: NotRequired[list[IStockCardDict] | None]
