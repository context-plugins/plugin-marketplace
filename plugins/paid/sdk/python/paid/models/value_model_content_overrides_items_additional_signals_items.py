from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unions.value_model_content_overrides_items_additional_signals_items_defaults import (
    ValueModelContentOverridesItemsAdditionalSignalsItemsDefaults,
    ValueModelContentOverridesItemsAdditionalSignalsItemsDefaultsDict,
)


class ValueModelContentOverridesItemsAdditionalSignalsItems(SdkBaseModel):
    event_name: str = Field(alias="eventName")
    label: str
    formula_id: Optional[str] = Field(default=UNSET, alias="formulaId")
    variable_mapping: Optional[dict[str, str]] = Field(default=UNSET, alias="variableMapping")
    defaults: Optional[dict[str, ValueModelContentOverridesItemsAdditionalSignalsItemsDefaults]] = UNSET
    segment_table_ids: Optional[list[str]] = Field(default=UNSET, alias="segmentTableIds")
    description: Optional[str] = UNSET
    labels: Optional[list[str]] = UNSET
    tags: Optional[list[str]] = UNSET


class ValueModelContentOverridesItemsAdditionalSignalsItemsDict(TypedDict):
    event_name: str
    label: str
    formula_id: NotRequired[str]
    variable_mapping: NotRequired[dict[str, str]]
    defaults: NotRequired[dict[str, ValueModelContentOverridesItemsAdditionalSignalsItemsDefaultsDict]]
    segment_table_ids: NotRequired[list[str]]
    description: NotRequired[str]
    labels: NotRequired[list[str]]
    tags: NotRequired[list[str]]
