from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .value_model_content_value_types_items_monetary_conversion import (
    ValueModelContentValueTypesItemsMonetaryConversion,
    ValueModelContentValueTypesItemsMonetaryConversionDict,
)


class ValueModelContentValueTypesItems(SdkBaseModel):
    slug: str
    name: str
    unit: Any
    monetary_conversion: Optional[ValueModelContentValueTypesItemsMonetaryConversion] = Field(
        default=UNSET, alias="monetaryConversion"
    )
    description: OptionalNullable[str] = UNSET
    display_order: OptionalNullable[int] = Field(default=UNSET, alias="displayOrder")
    color: OptionalNullable[str] = UNSET
    icon: OptionalNullable[str] = UNSET


class ValueModelContentValueTypesItemsDict(TypedDict):
    slug: str
    name: str
    unit: Any
    monetary_conversion: NotRequired[ValueModelContentValueTypesItemsMonetaryConversionDict]
    description: NotRequired[str | None]
    display_order: NotRequired[int | None]
    color: NotRequired[str | None]
    icon: NotRequired[str | None]
