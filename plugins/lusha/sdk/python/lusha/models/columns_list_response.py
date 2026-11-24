from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .column_summary import ColumnSummary, ColumnSummaryDict
from .v3_billing import V3Billing, V3BillingDict


class ColumnsListResponse(SdkBaseModel):
    """Response for List Columns — ``data`` is a bare array of ColumnDto."""

    data: Optional[list[ColumnSummary]] = UNSET
    billing: Optional[V3Billing] = UNSET
    """Credit usage summary for a V3 API request"""


class ColumnsListResponseDict(TypedDict):
    data: NotRequired[list[ColumnSummaryDict]]
    billing: NotRequired[V3BillingDict]
