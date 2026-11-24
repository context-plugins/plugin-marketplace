from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SicCode(SdkBaseModel):
    code: Optional[str] = UNSET
    label: Optional[str] = UNSET


class SicCodeDict(TypedDict):
    code: NotRequired[str]
    label: NotRequired[str]
