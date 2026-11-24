from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LegalInfo1(SdkBaseModel):
    pan: Optional[str] = UNSET
    gst: Optional[str] = UNSET


class LegalInfo1Dict(TypedDict):
    pan: NotRequired[str]
    gst: NotRequired[str]
