from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BidOutput(SdkBaseModel):
    partner_id: int = Field(alias="partnerId")
    """justtrack's internal ID for the partner"""

    campaign_id: str = Field(alias="campaignId")
    """The identifier for the campaign that originated with the partner"""

    value: float
    """bid value in USD"""

    country_code: Optional[str] = Field(default=UNSET, alias="countryCode")
    """ISO 3166-1 alpha-2 of your country, e.g. 'US'"""

    ad_set_id: Optional[str] = Field(default=UNSET, alias="adSetId")
    """partner's ID for this adset"""

    source_id: Optional[str] = Field(default=UNSET, alias="sourceId")
    """identifier provided by the ad network to target specific source app"""

    status: str
    """current status of the latest bid operation"""


class BidOutputDict(TypedDict):
    partner_id: int
    campaign_id: str
    value: float
    country_code: NotRequired[str]
    ad_set_id: NotRequired[str]
    source_id: NotRequired[str]
    status: str
