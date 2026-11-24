from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RowCountDiffDiagnosticsV4(SdkBaseModel):
    row_count_diff: Optional[int] = Field(default=UNSET, alias="rowCountDiff")
    row_count_diff_percent: Optional[float] = Field(default=UNSET, alias="rowCountDiffPercent")
    source_check_rows_tested: Optional[int] = Field(default=UNSET, alias="sourceCheckRowsTested")
    source_dataset_rows_tested: Optional[int] = Field(default=UNSET, alias="sourceDatasetRowsTested")
    target_check_rows_tested: Optional[int] = Field(default=UNSET, alias="targetCheckRowsTested")
    target_dataset_rows_tested: Optional[int] = Field(default=UNSET, alias="targetDatasetRowsTested")


class RowCountDiffDiagnosticsV4Dict(TypedDict):
    row_count_diff: NotRequired[int]
    row_count_diff_percent: NotRequired[float]
    source_check_rows_tested: NotRequired[int]
    source_dataset_rows_tested: NotRequired[int]
    target_check_rows_tested: NotRequired[int]
    target_dataset_rows_tested: NotRequired[int]
