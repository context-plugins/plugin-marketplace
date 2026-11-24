from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MissingDiagnosticsV4(SdkBaseModel):
    check_rows_tested: Optional[int] = Field(default=UNSET, alias="checkRowsTested")
    dataset_rows_tested: Optional[int] = Field(default=UNSET, alias="datasetRowsTested")
    failed_rows_count: Optional[int] = Field(default=UNSET, alias="failedRowsCount")
    failed_rows_data_query: Optional[str] = Field(default=UNSET, alias="failedRowsDataQuery")
    failed_rows_keys_query: Optional[str] = Field(default=UNSET, alias="failedRowsKeysQuery")
    failed_rows_percent: Optional[float] = Field(default=UNSET, alias="failedRowsPercent")
    failed_rows_source_query: Optional[str] = Field(default=UNSET, alias="failedRowsSourceQuery")


class MissingDiagnosticsV4Dict(TypedDict):
    check_rows_tested: NotRequired[int]
    dataset_rows_tested: NotRequired[int]
    failed_rows_count: NotRequired[int]
    failed_rows_data_query: NotRequired[str]
    failed_rows_keys_query: NotRequired[str]
    failed_rows_percent: NotRequired[float]
    failed_rows_source_query: NotRequired[str]
