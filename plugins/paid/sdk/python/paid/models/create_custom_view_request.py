from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .create_custom_view_request_period import CreateCustomViewRequestPeriod, CreateCustomViewRequestPeriodDict
from .custom_view_query import CustomViewQuery, CustomViewQueryDict
from .enums.create_custom_view_request_scope import CreateCustomViewRequestScopeOrStr


class CreateCustomViewRequest(SdkBaseModel):
    name: str
    """Human-readable view name (shown in preview + audit log)."""

    description: Optional[str] = UNSET
    """Optional longer description of what the view shows."""

    queries: list[CustomViewQuery]
    """One or more named queries. Each becomes a separately-keyed result set in the embed."""

    render_bundle: str = Field(alias="renderBundle")
    """Self-contained HTML document that renders the result sets. Inline ALL CSS/JS/charting libraries — the render
    sandbox has no network access. It receives the keyed result sets via a ``message`` event (``data[<queryId>]``) and
    must not fetch anything itself."""

    period: Optional[CreateCustomViewRequestPeriod] = UNSET
    """Optional default date range. Required if any query uses the ``{period_start:DateTime}`` /
    ``{period_end:DateTime}`` placeholders. Can be changed later in Paid without re-authoring."""

    scope: Optional[CreateCustomViewRequestScopeOrStr] = UNSET
    """'customer' (default): data is scoped to one viewing customer and the view is embeddable per-customer.
    'organization': data is org-wide; the view is internal-only (visible to org members in Paid, never embeddable)."""


class CreateCustomViewRequestDict(TypedDict):
    name: str
    description: NotRequired[str]
    queries: list[CustomViewQueryDict]
    render_bundle: str
    period: NotRequired[CreateCustomViewRequestPeriodDict]
    scope: NotRequired[CreateCustomViewRequestScopeOrStr]
