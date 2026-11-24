from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class SymbolHolder(SdkBaseModel):
    symbol: OptionalNullable[str] = UNSET
    exchange: OptionalNullable[str] = UNSET
    exchange_short_name: OptionalNullable[str] = Field(default=UNSET, alias="exchangeShortName")
    ipo_date: OptionalNullable[str] = Field(default=UNSET, alias="ipoDate")
    isin: OptionalNullable[str] = UNSET
    cusip: OptionalNullable[str] = UNSET


class SymbolHolderDict(TypedDict):
    symbol: NotRequired[str | None]
    exchange: NotRequired[str | None]
    exchange_short_name: NotRequired[str | None]
    ipo_date: NotRequired[str | None]
    isin: NotRequired[str | None]
    cusip: NotRequired[str | None]
