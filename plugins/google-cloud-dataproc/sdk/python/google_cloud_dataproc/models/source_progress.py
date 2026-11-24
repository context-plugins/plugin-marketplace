from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SourceProgress(SdkBaseModel):
    description: Optional[str] = UNSET
    metrics: Optional[dict[str, str]] = UNSET
    num_input_rows: Optional[str] = Field(default=UNSET, alias="numInputRows")
    processed_rows_per_second: Optional[float] = Field(default=UNSET, alias="processedRowsPerSecond")
    start_offset: Optional[str] = Field(default=UNSET, alias="startOffset")
    end_offset: Optional[str] = Field(default=UNSET, alias="endOffset")
    input_rows_per_second: Optional[float] = Field(default=UNSET, alias="inputRowsPerSecond")
    latest_offset: Optional[str] = Field(default=UNSET, alias="latestOffset")


class SourceProgressDict(TypedDict):
    description: NotRequired[str]
    metrics: NotRequired[dict[str, str]]
    num_input_rows: NotRequired[str]
    processed_rows_per_second: NotRequired[float]
    start_offset: NotRequired[str]
    end_offset: NotRequired[str]
    input_rows_per_second: NotRequired[float]
    latest_offset: NotRequired[str]
