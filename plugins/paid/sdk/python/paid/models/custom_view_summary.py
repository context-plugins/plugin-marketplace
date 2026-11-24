from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .custom_view_summary_period import CustomViewSummaryPeriod, CustomViewSummaryPeriodDict
from .enums.custom_view_detail_scope import CustomViewDetailScopeOrStr
from .enums.custom_view_summary_status import CustomViewSummaryStatusOrStr


class CustomViewSummary(SdkBaseModel):
    display_id: str = Field(alias="displayId")
    name: str
    description: str | None
    status: CustomViewSummaryStatusOrStr
    query_count: int = Field(alias="queryCount")
    """How many named queries the view holds."""

    period: CustomViewSummaryPeriod | None
    """The view's default date range, or null if it has none."""

    created_at: str = Field(alias="createdAt")
    """ISO 8601 creation timestamp."""

    scope: CustomViewDetailScopeOrStr
    """'customer': data is scoped to one viewing customer and the view is embeddable per-customer. 'organization': data
    is org-wide and the view is internal-only."""


class CustomViewSummaryDict(TypedDict):
    display_id: str
    name: str
    description: str | None
    status: CustomViewSummaryStatusOrStr
    query_count: int
    period: CustomViewSummaryPeriodDict | None
    created_at: str
    scope: CustomViewDetailScopeOrStr
