from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ReferenceDiffDiagnosticsV4(SdkBaseModel):
    diff_count: Optional[int] = Field(default=UNSET, alias="diffCount")
    diff_percent: Optional[float] = Field(default=UNSET, alias="diffPercent")
    exclusive_in_source: Optional[int] = Field(default=UNSET, alias="exclusiveInSource")
    exclusive_in_target: Optional[int] = Field(default=UNSET, alias="exclusiveInTarget")
    source_check_rows_tested: Optional[int] = Field(default=UNSET, alias="sourceCheckRowsTested")
    source_dataset_rows_tested: Optional[int] = Field(default=UNSET, alias="sourceDatasetRowsTested")
    target_check_rows_tested: Optional[int] = Field(default=UNSET, alias="targetCheckRowsTested")
    target_dataset_rows_tested: Optional[int] = Field(default=UNSET, alias="targetDatasetRowsTested")


class ReferenceDiffDiagnosticsV4Dict(TypedDict):
    diff_count: NotRequired[int]
    diff_percent: NotRequired[float]
    exclusive_in_source: NotRequired[int]
    exclusive_in_target: NotRequired[int]
    source_check_rows_tested: NotRequired[int]
    source_dataset_rows_tested: NotRequired[int]
    target_check_rows_tested: NotRequired[int]
    target_dataset_rows_tested: NotRequired[int]
