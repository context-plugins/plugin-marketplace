from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListCampaignsFilter(SdkBaseModel):
    campaign_id: Optional[str] = Field(default=UNSET, alias="campaignId")
    """The identifier for the campaign that originated with the partner"""

    partner_id: Optional[int] = Field(default=UNSET, alias="partnerId")
    """justtrack's internal ID for the partner"""


class ListCampaignsFilterDict(TypedDict):
    campaign_id: NotRequired[str]
    partner_id: NotRequired[int]
