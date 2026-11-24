from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Reason(SdkBaseModel):
    text: Optional[str] = UNSET
    points: Optional[float] = UNSET


class ReasonDict(TypedDict):
    text: NotRequired[str]
    points: NotRequired[float]
