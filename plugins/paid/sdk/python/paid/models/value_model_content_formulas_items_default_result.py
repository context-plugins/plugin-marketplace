from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.value_model_content_formulas_items_default_result_type import (
    ValueModelContentFormulasItemsDefaultResultTypeOrStr,
)


class ValueModelContentFormulasItemsDefaultResult(SdkBaseModel):
    type_: ValueModelContentFormulasItemsDefaultResultTypeOrStr = Field(alias="type")
    value: Optional[float] = UNSET
    expression: Optional[str] = UNSET


class ValueModelContentFormulasItemsDefaultResultDict(TypedDict):
    type_: ValueModelContentFormulasItemsDefaultResultTypeOrStr
    value: NotRequired[float]
    expression: NotRequired[str]
