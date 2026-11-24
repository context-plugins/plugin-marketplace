from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.value_model_content_formulas_items_variables_items_type import (
    ValueModelContentFormulasItemsVariablesItemsType,
    ValueModelContentFormulasItemsVariablesItemsTypeOrStr,
)
from .value_model_content_formulas_items_variables_items_derived_from import (
    ValueModelContentFormulasItemsVariablesItemsDerivedFrom,
    ValueModelContentFormulasItemsVariablesItemsDerivedFromDict,
)


class ValueModelContentFormulasItemsVariablesItems(SdkBaseModel):
    id: str
    label: str
    type_: ValueModelContentFormulasItemsVariablesItemsTypeOrStr = Field(
        default=ValueModelContentFormulasItemsVariablesItemsType.NUMBER, alias="type"
    )
    description: Optional[str] = UNSET
    derived_from: Optional[ValueModelContentFormulasItemsVariablesItemsDerivedFrom] = Field(
        default=UNSET, alias="derivedFrom"
    )


class ValueModelContentFormulasItemsVariablesItemsDict(TypedDict):
    id: str
    label: str
    type_: NotRequired[ValueModelContentFormulasItemsVariablesItemsTypeOrStr]
    description: NotRequired[str]
    derived_from: NotRequired[ValueModelContentFormulasItemsVariablesItemsDerivedFromDict]
