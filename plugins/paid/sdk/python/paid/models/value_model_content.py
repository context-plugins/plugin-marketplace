from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .value_model_content_formulas_items import ValueModelContentFormulasItems, ValueModelContentFormulasItemsDict
from .value_model_content_overrides_items import ValueModelContentOverridesItems, ValueModelContentOverridesItemsDict
from .value_model_content_segment_tables_items import (
    ValueModelContentSegmentTablesItems,
    ValueModelContentSegmentTablesItemsDict,
)
from .value_model_content_signals_items import ValueModelContentSignalsItems, ValueModelContentSignalsItemsDict
from .value_model_content_value_types_items import (
    ValueModelContentValueTypesItems,
    ValueModelContentValueTypesItemsDict,
)


class ValueModelContent(SdkBaseModel):
    """Full value model configuration: value types, formulas, signals, and overrides."""

    currency: str
    value_types: list[ValueModelContentValueTypesItems] = Field(alias="valueTypes")
    formulas: list[ValueModelContentFormulasItems]
    signals: list[ValueModelContentSignalsItems]
    segment_tables: Optional[list[ValueModelContentSegmentTablesItems]] = Field(default=UNSET, alias="segmentTables")
    overrides: Optional[list[ValueModelContentOverridesItems]] = UNSET


class ValueModelContentDict(TypedDict):
    currency: str
    value_types: list[ValueModelContentValueTypesItemsDict]
    formulas: list[ValueModelContentFormulasItemsDict]
    signals: list[ValueModelContentSignalsItemsDict]
    segment_tables: NotRequired[list[ValueModelContentSegmentTablesItemsDict]]
    overrides: NotRequired[list[ValueModelContentOverridesItemsDict]]
