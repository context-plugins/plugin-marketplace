from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .custom_view_detail_period import CustomViewDetailPeriod, CustomViewDetailPeriodDict
from .enums.custom_view_detail_scope import CustomViewDetailScopeOrStr
from .enums.custom_view_detail_status import CustomViewDetailStatusOrStr


class CustomViewDetail(SdkBaseModel):
    display_id: str = Field(alias="displayId")
    name: str
    description: str | None
    status: CustomViewDetailStatusOrStr
    query_ids: list[str] = Field(alias="queryIds")
    """Ids of the result sets the render bundle will receive."""

    render_bundle: str = Field(alias="renderBundle")
    """Self-contained HTML document rendered inside the isolated sandbox iframe."""

    period: CustomViewDetailPeriod | None
    """The view's current default date range, or null if it uses no adjustable period."""

    scope: CustomViewDetailScopeOrStr
    """'customer': data is scoped to one viewing customer and the view is embeddable per-customer. 'organization': data
    is org-wide and the view is internal-only."""


class CustomViewDetailDict(TypedDict):
    display_id: str
    name: str
    description: str | None
    status: CustomViewDetailStatusOrStr
    query_ids: list[str]
    render_bundle: str
    period: CustomViewDetailPeriodDict | None
    scope: CustomViewDetailScopeOrStr
