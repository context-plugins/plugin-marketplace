from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .action import Action, ActionDict
from .conversion import Conversion, ConversionDict


class InsightsData(SdkBaseModel):
    impressions: Optional[str] = UNSET
    """Number of times ads were shown"""

    clicks: Optional[str] = UNSET
    """Number of clicks on ads"""

    spend: Optional[str] = UNSET
    """Total amount spent during the period"""

    reach: Optional[str] = UNSET
    """Number of unique people who saw the ads"""

    cpc: Optional[str] = UNSET
    """Average cost per click"""

    cpm: Optional[str] = UNSET
    """Average cost per 1,000 impressions"""

    ctr: Optional[str] = UNSET
    """Click-through rate percentage"""

    frequency: Optional[str] = UNSET
    """Average number of times each person saw the ad"""

    actions: Optional[list[Action]] = UNSET
    """List of actions taken by people"""

    conversions: Optional[list[Conversion]] = UNSET
    """List of conversion events"""

    date_start: Optional[Date] = UNSET
    """Start date of the reporting period"""

    date_stop: Optional[Date] = UNSET
    """End date of the reporting period"""

    campaign_id: Optional[str] = UNSET
    campaign_name: Optional[str] = UNSET
    adset_id: Optional[str] = UNSET
    adset_name: Optional[str] = UNSET
    ad_id: Optional[str] = UNSET
    ad_name: Optional[str] = UNSET


class InsightsDataDict(TypedDict):
    impressions: NotRequired[str]
    clicks: NotRequired[str]
    spend: NotRequired[str]
    reach: NotRequired[str]
    cpc: NotRequired[str]
    cpm: NotRequired[str]
    ctr: NotRequired[str]
    frequency: NotRequired[str]
    actions: NotRequired[list[ActionDict]]
    conversions: NotRequired[list[ConversionDict]]
    date_start: NotRequired[Date]
    date_stop: NotRequired[Date]
    campaign_id: NotRequired[str]
    campaign_name: NotRequired[str]
    adset_id: NotRequired[str]
    adset_name: NotRequired[str]
    ad_id: NotRequired[str]
    ad_name: NotRequired[str]
