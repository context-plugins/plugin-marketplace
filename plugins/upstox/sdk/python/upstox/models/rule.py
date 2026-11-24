from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Rule(SdkBaseModel):
    strategy: Optional[str] = UNSET
    status: Optional[str] = UNSET
    message: Optional[str] = UNSET
    trigger_type: Optional[str] = UNSET
    trigger_price: Optional[float] = UNSET
    transaction_type: Optional[str] = UNSET
    order_id: Optional[str] = UNSET
    trailing_gap: Optional[float] = UNSET


class RuleDict(TypedDict):
    strategy: NotRequired[str]
    status: NotRequired[str]
    message: NotRequired[str]
    trigger_type: NotRequired[str]
    trigger_price: NotRequired[float]
    transaction_type: NotRequired[str]
    order_id: NotRequired[str]
    trailing_gap: NotRequired[float]
