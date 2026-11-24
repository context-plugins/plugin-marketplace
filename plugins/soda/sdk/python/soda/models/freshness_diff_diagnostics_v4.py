from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.freshness_diff_diagnostics_v4_unit_of_time_dto import FreshnessDiffDiagnosticsV4UnitOfTimeDtoOrStr


class FreshnessDiffDiagnosticsV4(SdkBaseModel):
    freshness_diff: Optional[int] = Field(default=UNSET, alias="freshnessDiff")
    freshness_diff_unit: Optional[FreshnessDiffDiagnosticsV4UnitOfTimeDtoOrStr] = Field(
        default=UNSET, alias="freshnessDiffUnit"
    )
    source_check_rows_tested: Optional[int] = Field(default=UNSET, alias="sourceCheckRowsTested")
    source_dataset_rows_tested: Optional[int] = Field(default=UNSET, alias="sourceDatasetRowsTested")
    source_max_timestamp: Optional[RFC3339DateTime] = Field(default=UNSET, alias="sourceMaxTimestamp")
    source_max_timestamp_utc: Optional[RFC3339DateTime] = Field(default=UNSET, alias="sourceMaxTimestampUtc")
    target_check_rows_tested: Optional[int] = Field(default=UNSET, alias="targetCheckRowsTested")
    target_dataset_rows_tested: Optional[int] = Field(default=UNSET, alias="targetDatasetRowsTested")
    target_max_timestamp: Optional[RFC3339DateTime] = Field(default=UNSET, alias="targetMaxTimestamp")
    target_max_timestamp_utc: Optional[RFC3339DateTime] = Field(default=UNSET, alias="targetMaxTimestampUtc")


class FreshnessDiffDiagnosticsV4Dict(TypedDict):
    freshness_diff: NotRequired[int]
    freshness_diff_unit: NotRequired[FreshnessDiffDiagnosticsV4UnitOfTimeDtoOrStr]
    source_check_rows_tested: NotRequired[int]
    source_dataset_rows_tested: NotRequired[int]
    source_max_timestamp: NotRequired[RFC3339DateTime]
    source_max_timestamp_utc: NotRequired[RFC3339DateTime]
    target_check_rows_tested: NotRequired[int]
    target_dataset_rows_tested: NotRequired[int]
    target_max_timestamp: NotRequired[RFC3339DateTime]
    target_max_timestamp_utc: NotRequired[RFC3339DateTime]
