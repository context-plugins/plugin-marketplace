from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicDashboard(SdkBaseModel):
    site_id: Optional[int] = UNSET
    enabled: bool


class PublicDashboardDict(TypedDict):
    site_id: NotRequired[int]
    enabled: bool
