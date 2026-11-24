from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .value_model_content_segment_tables_items_columns_items import (
    ValueModelContentSegmentTablesItemsColumnsItems,
    ValueModelContentSegmentTablesItemsColumnsItemsDict,
)
from .value_model_content_segment_tables_items_rows_items import (
    ValueModelContentSegmentTablesItemsRowsItems,
    ValueModelContentSegmentTablesItemsRowsItemsDict,
)


class ValueModelContentSegmentTablesItems(SdkBaseModel):
    id: str
    label: str
    segment_keys: list[str] = Field(alias="segmentKeys")
    columns: list[ValueModelContentSegmentTablesItemsColumnsItems]
    rows: list[ValueModelContentSegmentTablesItemsRowsItems]
    default_row: Optional[dict[str, float]] = Field(default=UNSET, alias="defaultRow")


class ValueModelContentSegmentTablesItemsDict(TypedDict):
    id: str
    label: str
    segment_keys: list[str]
    columns: list[ValueModelContentSegmentTablesItemsColumnsItemsDict]
    rows: list[ValueModelContentSegmentTablesItemsRowsItemsDict]
    default_row: NotRequired[dict[str, float]]
