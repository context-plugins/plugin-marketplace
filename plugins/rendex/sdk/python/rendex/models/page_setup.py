from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.orientation import Orientation, OrientationOrStr
from .enums.size import Size, SizeOrStr
from .margin import Margin, MarginDict


class PageSetup(SdkBaseModel):
    """Optional paper/viewport setup for the PDF and PNG."""

    size: SizeOrStr = Size.A4
    orientation: OrientationOrStr = Orientation.PORTRAIT
    margin: Optional[Margin] = UNSET
    """PDF page margins as CSS values (e.g. '1cm', '24px')."""

    scale: Optional[float] = UNSET
    """PDF render scale (0.1–2). Default 1."""

    width: Optional[int] = UNSET
    """PNG viewport width in px. Default 1280."""

    height: Optional[int] = UNSET
    """PNG viewport height in px. Default 800."""

    full_page: Optional[bool] = Field(default=UNSET, alias="fullPage")
    """Capture the full scrollable page for the PNG. Default true."""


class PageSetupDict(TypedDict):
    size: NotRequired[SizeOrStr]
    orientation: NotRequired[OrientationOrStr]
    margin: NotRequired[MarginDict]
    scale: NotRequired[float]
    width: NotRequired[int]
    height: NotRequired[int]
    full_page: NotRequired[bool]
