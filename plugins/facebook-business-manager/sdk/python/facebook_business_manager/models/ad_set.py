from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.bid_strategy import BidStrategyOrStr
from .enums.billing_event import BillingEventOrStr
from .enums.optimization_goal import OptimizationGoalOrStr
from .enums.status import StatusOrStr
from .targeting import Targeting, TargetingDict


class AdSet(SdkBaseModel):
    id: Optional[str] = UNSET
    """The ID of the ad set"""

    name: Optional[str] = UNSET
    """The name of the ad set"""

    campaign_id: Optional[str] = UNSET
    """The ID of the parent campaign"""

    status: Optional[StatusOrStr] = UNSET
    effective_status: Optional[str] = UNSET
    """Effective status considering parent statuses"""

    daily_budget: Optional[str] = UNSET
    """Daily budget in smallest currency unit"""

    lifetime_budget: Optional[str] = UNSET
    """Lifetime budget in smallest currency unit"""

    optimization_goal: Optional[OptimizationGoalOrStr] = UNSET
    """The optimization goal for ad delivery"""

    billing_event: Optional[BillingEventOrStr] = UNSET
    """The event used for billing"""

    bid_amount: Optional[int] = UNSET
    """Bid amount in smallest currency unit"""

    bid_strategy: Optional[BidStrategyOrStr] = UNSET
    """Bidding strategy for the ad set"""

    targeting: Optional[Targeting] = UNSET
    """Targeting specification for the ad set"""

    start_time: Optional[RFC3339DateTime] = UNSET
    end_time: Optional[RFC3339DateTime] = UNSET
    created_time: Optional[RFC3339DateTime] = UNSET
    updated_time: Optional[RFC3339DateTime] = UNSET


class AdSetDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    campaign_id: NotRequired[str]
    status: NotRequired[StatusOrStr]
    effective_status: NotRequired[str]
    daily_budget: NotRequired[str]
    lifetime_budget: NotRequired[str]
    optimization_goal: NotRequired[OptimizationGoalOrStr]
    billing_event: NotRequired[BillingEventOrStr]
    bid_amount: NotRequired[int]
    bid_strategy: NotRequired[BidStrategyOrStr]
    targeting: NotRequired[TargetingDict]
    start_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
