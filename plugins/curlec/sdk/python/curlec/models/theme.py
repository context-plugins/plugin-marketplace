from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Theme(SdkBaseModel):
    hide_topbar: Optional[bool] = UNSET
    """Hide the checkout top bar to prevent method switching."""


class ThemeDict(TypedDict):
    hide_topbar: NotRequired[bool]
