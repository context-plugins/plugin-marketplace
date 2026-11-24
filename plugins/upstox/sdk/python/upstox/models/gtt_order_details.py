from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .rule import Rule, RuleDict


class GttOrderDetails(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    exchange: Optional[str] = UNSET
    quantity: Optional[int] = UNSET
    product: Optional[str] = UNSET
    rules: Optional[list[Rule]] = UNSET
    trading_symbol: Optional[str] = UNSET
    instrument_token: Optional[str] = UNSET
    gtt_order_id: Optional[str] = UNSET
    expires_at: Optional[int] = UNSET
    created_at: Optional[int] = UNSET


class GttOrderDetailsDict(TypedDict):
    type_: NotRequired[str]
    exchange: NotRequired[str]
    quantity: NotRequired[int]
    product: NotRequired[str]
    rules: NotRequired[list[RuleDict]]
    trading_symbol: NotRequired[str]
    instrument_token: NotRequired[str]
    gtt_order_id: NotRequired[str]
    expires_at: NotRequired[int]
    created_at: NotRequired[int]
