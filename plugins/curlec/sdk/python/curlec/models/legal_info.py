from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LegalInfo(SdkBaseModel):
    pan: Optional[str] = UNSET
    """Business PAN number."""

    gst: Optional[str] = UNSET
    """GST number (22 chars)."""


class LegalInfoDict(TypedDict):
    pan: NotRequired[str]
    gst: NotRequired[str]
