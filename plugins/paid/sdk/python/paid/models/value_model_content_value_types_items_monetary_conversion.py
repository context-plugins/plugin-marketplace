from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .value_model_content_value_types_items_monetary_conversion_conditions_items import (
    ValueModelContentValueTypesItemsMonetaryConversionConditionsItems,
    ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsDict,
)
from .value_model_content_value_types_items_monetary_conversion_variables_items import (
    ValueModelContentValueTypesItemsMonetaryConversionVariablesItems,
    ValueModelContentValueTypesItemsMonetaryConversionVariablesItemsDict,
)


class ValueModelContentValueTypesItemsMonetaryConversion(SdkBaseModel):
    expression: str
    variables: Optional[list[ValueModelContentValueTypesItemsMonetaryConversionVariablesItems]] = UNSET
    conditions: Optional[list[ValueModelContentValueTypesItemsMonetaryConversionConditionsItems]] = UNSET


class ValueModelContentValueTypesItemsMonetaryConversionDict(TypedDict):
    expression: str
    variables: NotRequired[list[ValueModelContentValueTypesItemsMonetaryConversionVariablesItemsDict]]
    conditions: NotRequired[list[ValueModelContentValueTypesItemsMonetaryConversionConditionsItemsDict]]
