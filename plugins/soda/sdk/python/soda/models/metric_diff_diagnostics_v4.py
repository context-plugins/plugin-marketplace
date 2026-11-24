from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MetricDiffDiagnosticsV4(SdkBaseModel):
    metric_diff: Optional[float] = Field(default=UNSET, alias="metricDiff")
    metric_diff_percent: Optional[float] = Field(default=UNSET, alias="metricDiffPercent")
    source_check_rows_tested: Optional[int] = Field(default=UNSET, alias="sourceCheckRowsTested")
    source_dataset_rows_tested: Optional[int] = Field(default=UNSET, alias="sourceDatasetRowsTested")
    source_metric: Optional[float] = Field(default=UNSET, alias="sourceMetric")
    target_check_rows_tested: Optional[int] = Field(default=UNSET, alias="targetCheckRowsTested")
    target_dataset_rows_tested: Optional[int] = Field(default=UNSET, alias="targetDatasetRowsTested")
    target_metric: Optional[float] = Field(default=UNSET, alias="targetMetric")


class MetricDiffDiagnosticsV4Dict(TypedDict):
    metric_diff: NotRequired[float]
    metric_diff_percent: NotRequired[float]
    source_check_rows_tested: NotRequired[int]
    source_dataset_rows_tested: NotRequired[int]
    source_metric: NotRequired[float]
    target_check_rows_tested: NotRequired[int]
    target_dataset_rows_tested: NotRequired[int]
    target_metric: NotRequired[float]
