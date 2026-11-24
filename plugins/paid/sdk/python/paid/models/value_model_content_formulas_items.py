from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .value_model_content_formulas_items_conditions_items import (
    ValueModelContentFormulasItemsConditionsItems,
    ValueModelContentFormulasItemsConditionsItemsDict,
)
from .value_model_content_formulas_items_default_result import (
    ValueModelContentFormulasItemsDefaultResult,
    ValueModelContentFormulasItemsDefaultResultDict,
)
from .value_model_content_formulas_items_variables_items import (
    ValueModelContentFormulasItemsVariablesItems,
    ValueModelContentFormulasItemsVariablesItemsDict,
)


class ValueModelContentFormulasItems(SdkBaseModel):
    id: str
    value_type_slug: str = Field(alias="valueTypeSlug")
    label: str
    description: Optional[str] = UNSET
    variables: list[ValueModelContentFormulasItemsVariablesItems]
    expression: str
    conditions: Optional[list[ValueModelContentFormulasItemsConditionsItems]] = UNSET
    default_result: Optional[ValueModelContentFormulasItemsDefaultResult] = Field(default=UNSET, alias="defaultResult")


class ValueModelContentFormulasItemsDict(TypedDict):
    id: str
    value_type_slug: str
    label: str
    description: NotRequired[str]
    variables: list[ValueModelContentFormulasItemsVariablesItemsDict]
    expression: str
    conditions: NotRequired[list[ValueModelContentFormulasItemsConditionsItemsDict]]
    default_result: NotRequired[ValueModelContentFormulasItemsDefaultResultDict]
