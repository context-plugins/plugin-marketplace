from __future__ import annotations

from typing import Any

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class CustomTemplateInfo(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    header_index: OptionalNullable[str] = Field(default=UNSET, alias="headerIndex")
    product_name: OptionalNullable[str] = Field(default=UNSET, alias="productName")
    include_tax: OptionalNullable[str] = Field(default=UNSET, alias="includeTax")
    is_choose_date_column: Optional[bool] = Field(default=UNSET, alias="isChooseDateColumn")
    is_choose_unit_price_column: Optional[bool] = Field(default=UNSET, alias="isChooseUnitPriceColumn")
    columns: OptionalNullable[list[Any]] = UNSET


class CustomTemplateInfoDict(TypedDict):
    header_index: NotRequired[str | None]
    product_name: NotRequired[str | None]
    include_tax: NotRequired[str | None]
    is_choose_date_column: NotRequired[bool]
    is_choose_unit_price_column: NotRequired[bool]
    columns: NotRequired[list[Any] | None]
