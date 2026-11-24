from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InvalidBidOutput(SdkBaseModel):
    ad_set_id: Optional[str] = Field(default=UNSET, alias="adSetId")
    """partner's ID for this adset"""

    campaign_id: str = Field(alias="campaignId")
    """The identifier for the campaign that originated with the partner"""

    country_code: Optional[str] = Field(default=UNSET, alias="countryCode")
    """ISO 3166-1 alpha-2 of your country, e.g. 'US'"""

    partner_id: int = Field(alias="partnerId")
    """justtrack's internal ID for the partner"""

    partner_name: str = Field(alias="partnerName")
    """the name given to this ad partner"""

    source_id: Optional[str] = Field(default=UNSET, alias="sourceId")
    """identifier provided by the ad network to target specific source app"""

    status: str
    """error status for the bid"""

    message: str
    """error message why the bid is invalid"""


class InvalidBidOutputDict(TypedDict):
    ad_set_id: NotRequired[str]
    campaign_id: str
    country_code: NotRequired[str]
    partner_id: int
    partner_name: str
    source_id: NotRequired[str]
    status: str
    message: str
