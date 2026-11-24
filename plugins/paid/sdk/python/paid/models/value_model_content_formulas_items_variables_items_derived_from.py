from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.value_model_content_formulas_items_variables_items_derived_from_target_unit import (
    ValueModelContentFormulasItemsVariablesItemsDerivedFromTargetUnitOrStr,
)


class ValueModelContentFormulasItemsVariablesItemsDerivedFrom(SdkBaseModel):
    source_field: str = Field(alias="sourceField")
    target_unit: ValueModelContentFormulasItemsVariablesItemsDerivedFromTargetUnitOrStr = Field(alias="targetUnit")


class ValueModelContentFormulasItemsVariablesItemsDerivedFromDict(TypedDict):
    source_field: str
    target_unit: ValueModelContentFormulasItemsVariablesItemsDerivedFromTargetUnitOrStr
