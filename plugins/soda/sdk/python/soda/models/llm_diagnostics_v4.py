from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LlmDiagnosticsV4(SdkBaseModel):
    completion_tokens: Optional[int] = Field(default=UNSET, alias="completionTokens")
    failed_rows_count: Optional[int] = Field(default=UNSET, alias="failedRowsCount")
    failed_rows_data_query: Optional[str] = Field(default=UNSET, alias="failedRowsDataQuery")
    failed_rows_keys_query: Optional[str] = Field(default=UNSET, alias="failedRowsKeysQuery")
    failed_rows_source_query: Optional[str] = Field(default=UNSET, alias="failedRowsSourceQuery")
    model: Optional[str] = UNSET
    prompt_tokens: Optional[int] = Field(default=UNSET, alias="promptTokens")
    rows_checked: Optional[int] = Field(default=UNSET, alias="rowsChecked")
    rows_failed: Optional[int] = Field(default=UNSET, alias="rowsFailed")
    rows_failed_percent: Optional[float] = Field(default=UNSET, alias="rowsFailedPercent")
    tokens_spent: Optional[int] = Field(default=UNSET, alias="tokensSpent")


class LlmDiagnosticsV4Dict(TypedDict):
    completion_tokens: NotRequired[int]
    failed_rows_count: NotRequired[int]
    failed_rows_data_query: NotRequired[str]
    failed_rows_keys_query: NotRequired[str]
    failed_rows_source_query: NotRequired[str]
    model: NotRequired[str]
    prompt_tokens: NotRequired[int]
    rows_checked: NotRequired[int]
    rows_failed: NotRequired[int]
    rows_failed_percent: NotRequired[float]
    tokens_spent: NotRequired[int]
