from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.type import TypeOrStr


class ColumnSummary(SdkBaseModel):
    """ColumnDto — a column's definition plus aggregated per-cell status counts."""

    column_id: Optional[str] = Field(default=UNSET, alias="columnId")
    name: Optional[str] = UNSET
    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")
    key: OptionalNullable[str] = UNSET
    is_default: Optional[bool] = Field(default=UNSET, alias="isDefault")
    """Default Lusha columns cannot be removed."""

    added_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="addedAt")
    updated_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")
    rows_not_run: Optional[int] = Field(default=UNSET, alias="rowsNotRun")
    rows_processing: Optional[int] = Field(default=UNSET, alias="rowsProcessing")
    rows_success: Optional[int] = Field(default=UNSET, alias="rowsSuccess")
    rows_no_data: Optional[int] = Field(default=UNSET, alias="rowsNoData")
    rows_failed: Optional[int] = Field(default=UNSET, alias="rowsFailed")


class ColumnSummaryDict(TypedDict):
    column_id: NotRequired[str]
    name: NotRequired[str]
    type_: NotRequired[TypeOrStr]
    key: NotRequired[str | None]
    is_default: NotRequired[bool]
    added_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
    rows_not_run: NotRequired[int]
    rows_processing: NotRequired[int]
    rows_success: NotRequired[int]
    rows_no_data: NotRequired[int]
    rows_failed: NotRequired[int]
