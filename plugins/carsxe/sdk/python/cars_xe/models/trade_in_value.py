from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TradeInValue(SdkBaseModel):
    date: Optional[str] = UNSET
    value: Optional[str] = UNSET


class TradeInValueDict(TypedDict):
    date: NotRequired[str]
    value: NotRequired[str]
