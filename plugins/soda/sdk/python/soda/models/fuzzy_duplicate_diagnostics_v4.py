from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FuzzyDuplicateDiagnosticsV4(SdkBaseModel):
    candidate_rows_scored: Optional[int] = Field(default=UNSET, alias="candidateRowsScored")
    check_rows_tested: Optional[int] = Field(default=UNSET, alias="checkRowsTested")
    cluster_count: Optional[int] = Field(default=UNSET, alias="clusterCount")
    dataset_rows_tested: Optional[int] = Field(default=UNSET, alias="datasetRowsTested")
    failed_rows_count: Optional[int] = Field(default=UNSET, alias="failedRowsCount")
    failed_rows_data_query: Optional[str] = Field(default=UNSET, alias="failedRowsDataQuery")
    failed_rows_keys_query: Optional[str] = Field(default=UNSET, alias="failedRowsKeysQuery")
    failed_rows_source_query: Optional[str] = Field(default=UNSET, alias="failedRowsSourceQuery")
    fuzzy_duplicate_count: Optional[int] = Field(default=UNSET, alias="fuzzyDuplicateCount")
    fuzzy_duplicate_percent: Optional[float] = Field(default=UNSET, alias="fuzzyDuplicatePercent")
    mean_confidence: Optional[float] = Field(default=UNSET, alias="meanConfidence")


class FuzzyDuplicateDiagnosticsV4Dict(TypedDict):
    candidate_rows_scored: NotRequired[int]
    check_rows_tested: NotRequired[int]
    cluster_count: NotRequired[int]
    dataset_rows_tested: NotRequired[int]
    failed_rows_count: NotRequired[int]
    failed_rows_data_query: NotRequired[str]
    failed_rows_keys_query: NotRequired[str]
    failed_rows_source_query: NotRequired[str]
    fuzzy_duplicate_count: NotRequired[int]
    fuzzy_duplicate_percent: NotRequired[float]
    mean_confidence: NotRequired[float]
