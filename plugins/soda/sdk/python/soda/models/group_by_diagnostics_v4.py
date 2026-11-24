from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .group_by_diagnostics_v4_group import GroupByDiagnosticsV4Group, GroupByDiagnosticsV4GroupDict


class GroupByDiagnosticsV4(SdkBaseModel):
    diagnostics_count: Optional[int] = Field(default=UNSET, alias="diagnosticsCount")
    failed_rows_data_query: Optional[str] = Field(default=UNSET, alias="failedRowsDataQuery")
    failed_rows_keys_query: Optional[str] = Field(default=UNSET, alias="failedRowsKeysQuery")
    failed_rows_source_query: Optional[str] = Field(default=UNSET, alias="failedRowsSourceQuery")
    groups: Optional[list[GroupByDiagnosticsV4Group]] = UNSET


class GroupByDiagnosticsV4Dict(TypedDict):
    diagnostics_count: NotRequired[int]
    failed_rows_data_query: NotRequired[str]
    failed_rows_keys_query: NotRequired[str]
    failed_rows_source_query: NotRequired[str]
    groups: NotRequired[list[GroupByDiagnosticsV4GroupDict]]
