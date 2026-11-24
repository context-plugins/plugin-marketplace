from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateSiteRequest(SdkBaseModel):
    """Omitted fields are left unchanged."""

    url: Optional[str] = UNSET
    """Must start with http:// or https://."""

    timezone: Optional[str] = UNSET
    week_start: Optional[int] = UNSET
    """0 = Sunday … 6 = Saturday."""


class UpdateSiteRequestDict(TypedDict):
    url: NotRequired[str]
    timezone: NotRequired[str]
    week_start: NotRequired[int]
