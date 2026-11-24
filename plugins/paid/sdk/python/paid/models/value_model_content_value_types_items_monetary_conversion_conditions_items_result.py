from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.value_model_content_value_types_items_monetary_conversion_conditions_items_result_type import (
    ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResultTypeOrStr,
)


class ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResult(SdkBaseModel):
    type_: ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResultTypeOrStr = Field(alias="type")
    value: Optional[float] = UNSET
    expression: Optional[str] = UNSET


class ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResultDict(TypedDict):
    type_: ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsResultTypeOrStr
    value: NotRequired[float]
    expression: NotRequired[str]
