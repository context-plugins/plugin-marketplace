from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.animations import Animations, AnimationsOrStr
from .enums.color_scheme import ColorScheme, ColorSchemeOrStr
from .enums.format import Format, FormatOrStr
from .enums.wait_until import WaitUntil, WaitUntilOrStr
from .viewport import Viewport, ViewportDict


class ScreenshotRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    url: str
    format: FormatOrStr = Format.PNG
    full_page: bool = False
    viewport: Optional[Viewport] = UNSET
    wait_until: WaitUntilOrStr = WaitUntil.LOAD
    wait_for_selector: Optional[str] = UNSET
    selector: Optional[str] = UNSET
    delay_ms: int = 0
    timeout_ms: int = 20000
    quality: Optional[int] = UNSET
    omit_background: bool = False
    color_scheme: ColorSchemeOrStr = ColorScheme.LIGHT
    animations: AnimationsOrStr = Animations.DISABLED


class ScreenshotRequestDict(TypedDict):
    url: str
    format: NotRequired[FormatOrStr]
    full_page: NotRequired[bool]
    viewport: NotRequired[ViewportDict]
    wait_until: NotRequired[WaitUntilOrStr]
    wait_for_selector: NotRequired[str]
    selector: NotRequired[str]
    delay_ms: NotRequired[int]
    timeout_ms: NotRequired[int]
    quality: NotRequired[int]
    omit_background: NotRequired[bool]
    color_scheme: NotRequired[ColorSchemeOrStr]
    animations: NotRequired[AnimationsOrStr]
