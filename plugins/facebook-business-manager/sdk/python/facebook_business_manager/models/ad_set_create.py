from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.bid_strategy1 import BidStrategy1OrStr
from .enums.billing_event1 import BillingEvent1OrStr
from .enums.optimization_goal1 import OptimizationGoal1OrStr
from .enums.status1 import Status1OrStr


class AdSetCreate(SdkBaseModel):
    name: str
    campaign_id: str
    optimization_goal: OptimizationGoal1OrStr
    billing_event: BillingEvent1OrStr
    targeting: Any
    """Targeting specification"""

    status: Status1OrStr
    daily_budget: Optional[str] = UNSET
    lifetime_budget: Optional[str] = UNSET
    bid_amount: Optional[int] = UNSET
    bid_strategy: Optional[BidStrategy1OrStr] = UNSET
    start_time: Optional[RFC3339DateTime] = UNSET
    end_time: Optional[RFC3339DateTime] = UNSET


class AdSetCreateDict(TypedDict):
    name: str
    campaign_id: str
    optimization_goal: OptimizationGoal1OrStr
    billing_event: BillingEvent1OrStr
    targeting: Any
    status: Status1OrStr
    daily_budget: NotRequired[str]
    lifetime_budget: NotRequired[str]
    bid_amount: NotRequired[int]
    bid_strategy: NotRequired[BidStrategy1OrStr]
    start_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
