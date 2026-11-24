from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class SimpleProductItem(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    type_: Optional[int] = Field(default=UNSET, alias="type")
    name: OptionalNullable[str] = UNSET
    description: OptionalNullable[str] = UNSET
    quantity: Optional[float] = UNSET
    unit_name: OptionalNullable[str] = Field(default=UNSET, alias="unitName")
    price_per_unit: Optional[float] = Field(default=UNSET, alias="pricePerUnit")
    total: Optional[float] = UNSET
    sell_chart_of_account_code: OptionalNullable[str] = Field(default=UNSET, alias="sellChartOfAccountCode")
    buy_chart_of_account_code: OptionalNullable[str] = Field(default=UNSET, alias="buyChartOfAccountCode")
    product_code: OptionalNullable[str] = Field(default=UNSET, alias="productCode")


class SimpleProductItemDict(TypedDict):
    type_: NotRequired[int]
    name: NotRequired[str | None]
    description: NotRequired[str | None]
    quantity: NotRequired[float]
    unit_name: NotRequired[str | None]
    price_per_unit: NotRequired[float]
    total: NotRequired[float]
    sell_chart_of_account_code: NotRequired[str | None]
    buy_chart_of_account_code: NotRequired[str | None]
    product_code: NotRequired[str | None]
