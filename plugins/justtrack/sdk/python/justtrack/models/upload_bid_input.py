from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UploadBidInput(SdkBaseModel):
    ad_set_id: Optional[str] = Field(default=UNSET, alias="adSetId")
    """partner's ID for this adset"""

    campaign_id: str = Field(alias="campaignId")
    """The identifier for the campaign that originated with the partner"""

    country_code: Optional[str] = Field(default=UNSET, alias="countryCode")
    """ISO 3166-1 alpha-2 of your country, e.g. 'US'"""

    delete: bool
    """true, if you want to delete the bid. Defaults to false"""

    optimal_bid_usd: float = Field(alias="optimalBidUsd")
    """bid value in USD"""

    partner_id: int = Field(alias="partnerId")
    """justtrack's internal ID for the partner"""

    source_id: Optional[str] = Field(default=UNSET, alias="sourceId")
    """identifier provided by the ad network to target specific source app"""


class UploadBidInputDict(TypedDict):
    ad_set_id: NotRequired[str]
    campaign_id: str
    country_code: NotRequired[str]
    delete: bool
    optimal_bid_usd: float
    partner_id: int
    source_id: NotRequired[str]
