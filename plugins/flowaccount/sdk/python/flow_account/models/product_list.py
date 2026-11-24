from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.product_non_inventory_type import ProductNonInventoryTypeOrInt
from .enums.product_types import ProductTypesOrInt
from .product_category import ProductCategory, ProductCategoryDict
from .product_unit import ProductUnit, ProductUnitDict


class ProductList(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: Optional[int] = UNSET
    bar_code: OptionalNullable[str] = Field(default=UNSET, alias="barCode")
    name: str
    unit_measurement: OptionalNullable[str] = Field(default=UNSET, alias="unitMeasurement")
    unit_price: OptionalNullable[float] = Field(default=UNSET, alias="unitPrice")
    unit_price_with_vat: OptionalNullable[float] = Field(default=UNSET, alias="unitPriceWithVat")
    unit_weight: OptionalNullable[float] = Field(default=UNSET, alias="unitWeight")
    category_id: OptionalNullable[int] = Field(default=UNSET, alias="categoryId")
    description: OptionalNullable[str] = UNSET
    remarks: OptionalNullable[str] = UNSET
    gallery_id: OptionalNullable[int] = Field(default=UNSET, alias="galleryId")
    is_vat: Optional[bool] = Field(default=UNSET, alias="isVat")
    main_unit_id: OptionalNullable[int] = Field(default=UNSET, alias="mainUnitId")
    sub_unit_id: OptionalNullable[int] = Field(default=UNSET, alias="subUnitId")
    main_unit_amount: Optional[int] = Field(default=UNSET, alias="mainUnitAmount")
    sub_unit_amount: Optional[int] = Field(default=UNSET, alias="subUnitAmount")
    has_stock: Optional[bool] = Field(default=UNSET, alias="hasStock")
    product_code: OptionalNullable[str] = Field(default=UNSET, alias="productCode")
    type_: Optional[ProductTypesOrInt] = Field(default=UNSET, alias="type")
    """1 = Service 3 = ProductWithNoStock 5 = ProductWithStock"""

    buy_price: OptionalNullable[float] = Field(default=UNSET, alias="buyPrice")
    buy_price_with_vat: OptionalNullable[float] = Field(default=UNSET, alias="buyPriceWithVat")
    is_buy_vat: Optional[bool] = Field(default=UNSET, alias="isBuyVat")
    allow_over_sold: Optional[bool] = Field(default=UNSET, alias="allowOverSold")
    image: OptionalNullable[str] = UNSET
    is_delete: Optional[bool] = Field(default=UNSET, alias="isDelete")
    vat_rate: Optional[int] = Field(default=UNSET, alias="vatRate")
    buy_vat_rate: Optional[int] = Field(default=UNSET, alias="buyVatRate")
    reset_transaction_id: OptionalNullable[int] = Field(default=UNSET, alias="resetTransactionId")
    created_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdOn")
    modified_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="modifiedOn")
    brought_forward_on: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="broughtForwardOn")
    buy_description: OptionalNullable[str] = Field(default=UNSET, alias="buyDescription")
    buy_chart_of_account_id: OptionalNullable[int] = Field(default=UNSET, alias="buyChartOfAccountId")
    sell_chart_of_account_id: OptionalNullable[int] = Field(default=UNSET, alias="sellChartOfAccountId")
    product_non_inventory_type: Optional[ProductNonInventoryTypeOrInt] = Field(
        default=UNSET, alias="productNonInventoryType"
    )
    transaction_id: OptionalNullable[str] = Field(default=UNSET, alias="transactionId")
    product_main_unit: Optional[ProductUnit] = Field(default=UNSET, alias="productMainUnit")
    product_sub_unit: Optional[ProductUnit] = Field(default=UNSET, alias="productSubUnit")
    product_category: Optional[ProductCategory] = Field(default=UNSET, alias="productCategory")
    is_migrate: Optional[bool] = Field(default=UNSET, alias="isMigrate")


class ProductListDict(TypedDict):
    id: NotRequired[int]
    bar_code: NotRequired[str | None]
    name: str
    unit_measurement: NotRequired[str | None]
    unit_price: NotRequired[float | None]
    unit_price_with_vat: NotRequired[float | None]
    unit_weight: NotRequired[float | None]
    category_id: NotRequired[int | None]
    description: NotRequired[str | None]
    remarks: NotRequired[str | None]
    gallery_id: NotRequired[int | None]
    is_vat: NotRequired[bool]
    main_unit_id: NotRequired[int | None]
    sub_unit_id: NotRequired[int | None]
    main_unit_amount: NotRequired[int]
    sub_unit_amount: NotRequired[int]
    has_stock: NotRequired[bool]
    product_code: NotRequired[str | None]
    type_: NotRequired[ProductTypesOrInt]
    buy_price: NotRequired[float | None]
    buy_price_with_vat: NotRequired[float | None]
    is_buy_vat: NotRequired[bool]
    allow_over_sold: NotRequired[bool]
    image: NotRequired[str | None]
    is_delete: NotRequired[bool]
    vat_rate: NotRequired[int]
    buy_vat_rate: NotRequired[int]
    reset_transaction_id: NotRequired[int | None]
    created_on: NotRequired[RFC3339DateTime]
    modified_on: NotRequired[RFC3339DateTime]
    brought_forward_on: NotRequired[RFC3339DateTime | None]
    buy_description: NotRequired[str | None]
    buy_chart_of_account_id: NotRequired[int | None]
    sell_chart_of_account_id: NotRequired[int | None]
    product_non_inventory_type: NotRequired[ProductNonInventoryTypeOrInt]
    transaction_id: NotRequired[str | None]
    product_main_unit: NotRequired[ProductUnitDict]
    product_sub_unit: NotRequired[ProductUnitDict]
    product_category: NotRequired[ProductCategoryDict]
    is_migrate: NotRequired[bool]
