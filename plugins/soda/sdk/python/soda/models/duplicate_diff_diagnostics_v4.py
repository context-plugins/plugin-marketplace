from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DuplicateDiffDiagnosticsV4(SdkBaseModel):
    duplicate_count_diff: Optional[int] = Field(default=UNSET, alias="duplicateCountDiff")
    duplicate_diff_percent: Optional[float] = Field(default=UNSET, alias="duplicateDiffPercent")
    source_check_rows_tested: Optional[int] = Field(default=UNSET, alias="sourceCheckRowsTested")
    source_dataset_rows_tested: Optional[int] = Field(default=UNSET, alias="sourceDatasetRowsTested")
    source_duplicate_count: Optional[int] = Field(default=UNSET, alias="sourceDuplicateCount")
    target_check_rows_tested: Optional[int] = Field(default=UNSET, alias="targetCheckRowsTested")
    target_dataset_rows_tested: Optional[int] = Field(default=UNSET, alias="targetDatasetRowsTested")
    target_duplicate_count: Optional[int] = Field(default=UNSET, alias="targetDuplicateCount")


class DuplicateDiffDiagnosticsV4Dict(TypedDict):
    duplicate_count_diff: NotRequired[int]
    duplicate_diff_percent: NotRequired[float]
    source_check_rows_tested: NotRequired[int]
    source_dataset_rows_tested: NotRequired[int]
    source_duplicate_count: NotRequired[int]
    target_check_rows_tested: NotRequired[int]
    target_dataset_rows_tested: NotRequired[int]
    target_duplicate_count: NotRequired[int]
