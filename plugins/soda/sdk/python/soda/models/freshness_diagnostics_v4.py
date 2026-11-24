from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class FreshnessDiagnosticsV4(SdkBaseModel):
    actual_timestamp: Optional[RFC3339DateTime] = Field(default=UNSET, alias="actualTimestamp")
    actual_timestamp_utc: Optional[RFC3339DateTime] = Field(default=UNSET, alias="actualTimestampUtc")
    dataset_rows_tested: Optional[int] = Field(default=UNSET, alias="datasetRowsTested")
    expected_timestamp: Optional[RFC3339DateTime] = Field(default=UNSET, alias="expectedTimestamp")
    expected_timestamp_utc: Optional[RFC3339DateTime] = Field(default=UNSET, alias="expectedTimestampUtc")


class FreshnessDiagnosticsV4Dict(TypedDict):
    actual_timestamp: NotRequired[RFC3339DateTime]
    actual_timestamp_utc: NotRequired[RFC3339DateTime]
    dataset_rows_tested: NotRequired[int]
    expected_timestamp: NotRequired[RFC3339DateTime]
    expected_timestamp_utc: NotRequired[RFC3339DateTime]
