from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HierarchyDiagnosticsV4(SdkBaseModel):
    broken_path_count: Optional[int] = Field(default=UNSET, alias="brokenPathCount")
    check_rows_tested: Optional[int] = Field(default=UNSET, alias="checkRowsTested")
    dataset_rows_tested: Optional[int] = Field(default=UNSET, alias="datasetRowsTested")
    failed_rows_count: Optional[int] = Field(default=UNSET, alias="failedRowsCount")
    failed_rows_data_query: Optional[str] = Field(default=UNSET, alias="failedRowsDataQuery")
    failed_rows_keys_query: Optional[str] = Field(default=UNSET, alias="failedRowsKeysQuery")
    failed_rows_source_query: Optional[str] = Field(default=UNSET, alias="failedRowsSourceQuery")
    invalid_value_count: Optional[int] = Field(default=UNSET, alias="invalidValueCount")
    missing_value_count: Optional[int] = Field(default=UNSET, alias="missingValueCount")


class HierarchyDiagnosticsV4Dict(TypedDict):
    broken_path_count: NotRequired[int]
    check_rows_tested: NotRequired[int]
    dataset_rows_tested: NotRequired[int]
    failed_rows_count: NotRequired[int]
    failed_rows_data_query: NotRequired[str]
    failed_rows_keys_query: NotRequired[str]
    failed_rows_source_query: NotRequired[str]
    invalid_value_count: NotRequired[int]
    missing_value_count: NotRequired[int]
