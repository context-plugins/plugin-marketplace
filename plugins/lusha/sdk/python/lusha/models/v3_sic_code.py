from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V3SicCode(SdkBaseModel):
    code: Optional[int] = UNSET
    description: Optional[str] = UNSET


class V3SicCodeDict(TypedDict):
    code: NotRequired[int]
    description: NotRequired[str]
