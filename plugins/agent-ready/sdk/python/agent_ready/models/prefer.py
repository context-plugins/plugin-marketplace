from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.format import FormatOrStr
from .enums.mode import ModeOrStr


class Prefer(SdkBaseModel):
    streaming: Optional[bool] = UNSET
    format: Optional[FormatOrStr] = UNSET
    mode: Optional[ModeOrStr] = UNSET
    language: Optional[str] = UNSET


class PreferDict(TypedDict):
    streaming: NotRequired[bool]
    format: NotRequired[FormatOrStr]
    mode: NotRequired[ModeOrStr]
    language: NotRequired[str]
