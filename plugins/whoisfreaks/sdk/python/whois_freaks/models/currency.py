from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Currency(SdkBaseModel):
    code: Optional[str] = UNSET
    name: Optional[str] = UNSET
    symbol: Optional[str] = UNSET


class CurrencyDict(TypedDict):
    code: NotRequired[str]
    name: NotRequired[str]
    symbol: NotRequired[str]
