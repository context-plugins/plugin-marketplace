from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class QuickReply52(SdkBaseModel):
    id: Optional[str] = UNSET
    label: str
    payload: str


class QuickReply52Dict(TypedDict):
    id: NotRequired[str]
    label: str
    payload: str
