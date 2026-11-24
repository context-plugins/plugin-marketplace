from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.required_campaign_type import RequiredCampaignTypeOrStr
from .enums.required_platform import RequiredPlatformOrStr


class CampaignOutput(SdkBaseModel):
    app_id: int = Field(alias="appId")
    """justtrack's internal ID for the app"""

    country_codes: list[str] = Field(alias="countryCodes")
    created_at: RFC3339DateTime = Field(alias="createdAt")
    goal_name: Optional[str] = Field(default=UNSET, alias="goalName")
    """the name of your app goal in justtrack"""

    id: Optional[str] = UNSET
    """The identifier for the campaign that originated with the partner"""

    name: str
    optimization_type: Optional[str] = Field(default=UNSET, alias="optimizationType")
    """towards what the partner is optimizing this campaign"""

    partner_id: int = Field(alias="partnerId")
    """justtrack's internal ID for the partner"""

    platform: RequiredPlatformOrStr
    """identifier of the platform"""

    promo_code: Optional[str] = Field(default=UNSET, alias="promoCode")
    type_: RequiredCampaignTypeOrStr = Field(alias="type")
    """The type of campaign you're running. Retargeting campaigns require special set up on partner side to target only
    existing users."""

    updated_at: RFC3339DateTime = Field(alias="updatedAt")


class CampaignOutputDict(TypedDict):
    app_id: int
    country_codes: list[str]
    created_at: RFC3339DateTime
    goal_name: NotRequired[str]
    id: NotRequired[str]
    name: str
    optimization_type: NotRequired[str]
    partner_id: int
    platform: RequiredPlatformOrStr
    promo_code: NotRequired[str]
    type_: RequiredCampaignTypeOrStr
    updated_at: RFC3339DateTime
