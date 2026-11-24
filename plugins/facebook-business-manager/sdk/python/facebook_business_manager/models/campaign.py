from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.buying_type import BuyingTypeOrStr
from .enums.objective import ObjectiveOrStr
from .enums.status1_facebook_business_manager_facebook_marketing_campaigns_api import (
    Status1FacebookBusinessManagerFacebookMarketingCampaignsApiOrStr,
)


class Campaign(SdkBaseModel):
    id: Optional[str] = UNSET
    """The ID of the campaign"""

    name: Optional[str] = UNSET
    """The name of the campaign"""

    objective: Optional[ObjectiveOrStr] = UNSET
    """The campaign objective"""

    status: Optional[Status1FacebookBusinessManagerFacebookMarketingCampaignsApiOrStr] = UNSET
    """The configured status of the campaign"""

    effective_status: Optional[str] = UNSET
    """The effective status of the campaign taking into account parent statuses and schedule."""

    daily_budget: Optional[str] = UNSET
    """Daily budget amount in account currency smallest unit"""

    lifetime_budget: Optional[str] = UNSET
    """Lifetime budget amount in account currency smallest unit"""

    budget_remaining: Optional[str] = UNSET
    """Remaining budget for the campaign"""

    buying_type: Optional[BuyingTypeOrStr] = UNSET
    """Buying type of the campaign"""

    special_ad_categories: Optional[list[str]] = UNSET
    """Special ad categories required for housing, employment, credit, or social issues ads."""

    created_time: Optional[RFC3339DateTime] = UNSET
    """Time when the campaign was created"""

    updated_time: Optional[RFC3339DateTime] = UNSET
    """Time when the campaign was last updated"""

    start_time: Optional[RFC3339DateTime] = UNSET
    """Scheduled start time of the campaign"""

    stop_time: Optional[RFC3339DateTime] = UNSET
    """Scheduled stop time of the campaign"""


class CampaignDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    objective: NotRequired[ObjectiveOrStr]
    status: NotRequired[Status1FacebookBusinessManagerFacebookMarketingCampaignsApiOrStr]
    effective_status: NotRequired[str]
    daily_budget: NotRequired[str]
    lifetime_budget: NotRequired[str]
    budget_remaining: NotRequired[str]
    buying_type: NotRequired[BuyingTypeOrStr]
    special_ad_categories: NotRequired[list[str]]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
    start_time: NotRequired[RFC3339DateTime]
    stop_time: NotRequired[RFC3339DateTime]
