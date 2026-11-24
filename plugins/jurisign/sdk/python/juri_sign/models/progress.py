from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Progress(SdkBaseModel):
    signed: Optional[int] = UNSET
    total: Optional[int] = UNSET


class ProgressDict(TypedDict):
    signed: NotRequired[int]
    total: NotRequired[int]
