from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Exchange1(SdkBaseModel):
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    mic_code: Optional[str] = UNSET


class Exchange1Dict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    mic_code: NotRequired[str]
