from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Engagement(SdkBaseModel):
    lib_button_clicks: Optional[int] = UNSET
    clicks: Optional[int] = UNSET
    scans: Optional[int] = UNSET


class EngagementDict(TypedDict):
    lib_button_clicks: NotRequired[int]
    clicks: NotRequired[int]
    scans: NotRequired[int]
