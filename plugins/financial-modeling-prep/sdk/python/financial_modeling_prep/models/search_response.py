from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SearchResponse(SdkBaseModel):
    symbol: Optional[str] = UNSET
    name: Optional[str] = UNSET
    currency: Optional[str] = UNSET
    stock_exchange: Optional[str] = Field(default=UNSET, alias="stockExchange")
    exchange_short_name: Optional[str] = Field(default=UNSET, alias="exchangeShortName")


class SearchResponseDict(TypedDict):
    symbol: NotRequired[str]
    name: NotRequired[str]
    currency: NotRequired[str]
    stock_exchange: NotRequired[str]
    exchange_short_name: NotRequired[str]
