from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.value_model_content_formulas_items_conditions_items_operator import (
    ValueModelContentFormulasItemsConditionsItemsOperatorOrStr,
)
from .unions.value_model_content_formulas_items_conditions_items_value import (
    ValueModelContentFormulasItemsConditionsItemsValue,
    ValueModelContentFormulasItemsConditionsItemsValueDict,
)
from .value_model_content_formulas_items_conditions_items_result import (
    ValueModelContentFormulasItemsConditionsItemsResult,
    ValueModelContentFormulasItemsConditionsItemsResultDict,
)


class ValueModelContentFormulasItemsConditionsItems(SdkBaseModel):
    field: str
    operator: ValueModelContentFormulasItemsConditionsItemsOperatorOrStr
    value: ValueModelContentFormulasItemsConditionsItemsValue
    result: ValueModelContentFormulasItemsConditionsItemsResult


class ValueModelContentFormulasItemsConditionsItemsDict(TypedDict):
    field: str
    operator: ValueModelContentFormulasItemsConditionsItemsOperatorOrStr
    value: ValueModelContentFormulasItemsConditionsItemsValueDict
    result: ValueModelContentFormulasItemsConditionsItemsResultDict
