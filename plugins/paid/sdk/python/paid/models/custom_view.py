from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.custom_view_detail_scope import CustomViewDetailScopeOrStr
from .enums.custom_view_status import CustomViewStatusOrStr


class CustomView(SdkBaseModel):
    display_id: str = Field(alias="displayId")
    """Stable public identifier used in preview/embed URLs."""

    name: str
    status: CustomViewStatusOrStr
    """A view is DRAFT until explicitly published. For customer-scoped views, only PUBLISHED views are embeddable and
    served to end-customers; a DRAFT is not. For organization-scoped views, publishing is only a 'ready to use' marker —
    both DRAFT and PUBLISHED are visible to your organization's members in Paid (publishing does not change who in the
    org can see it), and neither is ever embeddable to an end-customer."""

    preview_url: str | None = Field(alias="previewUrl")
    """Absolute URL to open this view in the Paid app for preview. Surface it to the user after creating or publishing a
    view. Null when the app URL is not configured."""

    scope: CustomViewDetailScopeOrStr
    """'customer': data is scoped to one viewing customer and the view is embeddable per-customer. 'organization': data
    is org-wide and the view is internal-only."""


class CustomViewDict(TypedDict):
    display_id: str
    name: str
    status: CustomViewStatusOrStr
    preview_url: str | None
    scope: CustomViewDetailScopeOrStr
