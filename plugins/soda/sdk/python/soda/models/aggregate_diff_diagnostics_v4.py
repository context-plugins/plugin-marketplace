from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AggregateDiffDiagnosticsV4(SdkBaseModel):
    diff: Optional[float] = UNSET
    diff_percent: Optional[float] = Field(default=UNSET, alias="diffPercent")
    function: Optional[str] = UNSET
    source_check_rows_tested: Optional[int] = Field(default=UNSET, alias="sourceCheckRowsTested")
    source_dataset_rows_tested: Optional[int] = Field(default=UNSET, alias="sourceDatasetRowsTested")
    source_value: Optional[float] = Field(default=UNSET, alias="sourceValue")
    target_check_rows_tested: Optional[int] = Field(default=UNSET, alias="targetCheckRowsTested")
    target_dataset_rows_tested: Optional[int] = Field(default=UNSET, alias="targetDatasetRowsTested")
    target_value: Optional[float] = Field(default=UNSET, alias="targetValue")


class AggregateDiffDiagnosticsV4Dict(TypedDict):
    diff: NotRequired[float]
    diff_percent: NotRequired[float]
    function: NotRequired[str]
    source_check_rows_tested: NotRequired[int]
    source_dataset_rows_tested: NotRequired[int]
    source_value: NotRequired[float]
    target_check_rows_tested: NotRequired[int]
    target_dataset_rows_tested: NotRequired[int]
    target_value: NotRequired[float]
