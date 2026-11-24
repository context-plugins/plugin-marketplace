from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .creative1 import Creative1, Creative1Dict
from .enums.status1_facebook_business_manager_facebook_marketing_ads_api import (
    Status1FacebookBusinessManagerFacebookMarketingAdsApiOrStr,
)


class Ad(SdkBaseModel):
    id: Optional[str] = UNSET
    """The ID of the ad"""

    name: Optional[str] = UNSET
    """The name of the ad"""

    adset_id: Optional[str] = UNSET
    """The ID of the parent ad set"""

    campaign_id: Optional[str] = UNSET
    """The ID of the parent campaign"""

    creative: Optional[Creative1] = UNSET
    status: Optional[Status1FacebookBusinessManagerFacebookMarketingAdsApiOrStr] = UNSET
    effective_status: Optional[str] = UNSET
    """Effective status considering parent statuses"""

    created_time: Optional[RFC3339DateTime] = UNSET
    updated_time: Optional[RFC3339DateTime] = UNSET


class AdDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    adset_id: NotRequired[str]
    campaign_id: NotRequired[str]
    creative: NotRequired[Creative1Dict]
    status: NotRequired[Status1FacebookBusinessManagerFacebookMarketingAdsApiOrStr]
    effective_status: NotRequired[str]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
