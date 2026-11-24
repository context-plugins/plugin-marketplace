from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PdfMargin(SdkBaseModel):
    """Page margins for PDF output (CSS units, e.g. "1cm", "0.5in")"""

    top: Optional[str] = UNSET
    right: Optional[str] = UNSET
    bottom: Optional[str] = UNSET
    left: Optional[str] = UNSET


class PdfMarginDict(TypedDict):
    top: NotRequired[str]
    right: NotRequired[str]
    bottom: NotRequired[str]
    left: NotRequired[str]
