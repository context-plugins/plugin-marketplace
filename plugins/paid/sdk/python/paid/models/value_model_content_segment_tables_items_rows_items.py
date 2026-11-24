from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ValueModelContentSegmentTablesItemsRowsItems(SdkBaseModel):
    segment_values: dict[str, str] = Field(alias="segmentValues")
    variables: dict[str, float]


class ValueModelContentSegmentTablesItemsRowsItemsDict(TypedDict):
    segment_values: dict[str, str]
    variables: dict[str, float]
