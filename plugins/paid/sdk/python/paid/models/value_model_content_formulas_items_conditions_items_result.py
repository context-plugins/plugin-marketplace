from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.value_model_content_formulas_items_conditions_items_result_type import (
    ValueModelContentFormulasItemsConditionsItemsResultTypeOrStr,
)


class ValueModelContentFormulasItemsConditionsItemsResult(SdkBaseModel):
    type_: ValueModelContentFormulasItemsConditionsItemsResultTypeOrStr = Field(alias="type")
    value: Optional[float] = UNSET
    expression: Optional[str] = UNSET


class ValueModelContentFormulasItemsConditionsItemsResultDict(TypedDict):
    type_: ValueModelContentFormulasItemsConditionsItemsResultTypeOrStr
    value: NotRequired[float]
    expression: NotRequired[str]
