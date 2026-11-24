from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .put_call_option_chain_data import PutCallOptionChainData, PutCallOptionChainDataDict


class OptionStrikeData(SdkBaseModel):
    expiry: Optional[RFC3339DateTime] = UNSET
    pcr: Optional[float] = UNSET
    strike_price: Optional[float] = UNSET
    underlying_key: Optional[str] = UNSET
    underlying_spot_price: Optional[float] = UNSET
    call_options: Optional[PutCallOptionChainData] = UNSET
    put_options: Optional[PutCallOptionChainData] = UNSET


class OptionStrikeDataDict(TypedDict):
    expiry: NotRequired[RFC3339DateTime]
    pcr: NotRequired[float]
    strike_price: NotRequired[float]
    underlying_key: NotRequired[str]
    underlying_spot_price: NotRequired[float]
    call_options: NotRequired[PutCallOptionChainDataDict]
    put_options: NotRequired[PutCallOptionChainDataDict]
