from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.required_campaign_type import RequiredCampaignTypeOrStr


class CreateCampaignRequest(SdkBaseModel):
    app_id: int = Field(alias="appId")
    """justtrack's internal ID for the app"""

    country_codes: list[str] = Field(alias="countryCodes")
    goal_name: Optional[str] = Field(default=UNSET, alias="goalName")
    """the name of your app goal in justtrack"""

    id: str
    """The identifier for the campaign that originated with the partner"""

    name: str
    optimization_type: str = Field(alias="optimizationType")
    """towards what the partner is optimizing this campaign"""

    partner_id: int = Field(alias="partnerId")
    """justtrack's internal ID for the partner"""

    promo_code: Optional[str] = Field(default=UNSET, alias="promoCode")
    type_: RequiredCampaignTypeOrStr = Field(alias="type")
    """The type of campaign you're running. Retargeting campaigns require special set up on partner side to target only
    existing users."""


class CreateCampaignRequestDict(TypedDict):
    app_id: int
    country_codes: list[str]
    goal_name: NotRequired[str]
    id: str
    name: str
    optimization_type: str
    partner_id: int
    promo_code: NotRequired[str]
    type_: RequiredCampaignTypeOrStr
