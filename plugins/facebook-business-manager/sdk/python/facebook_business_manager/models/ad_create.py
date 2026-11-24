from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .creative import Creative, CreativeDict
from .enums.status_facebook_business_manager_facebook_marketing_ads_api import (
    StatusFacebookBusinessManagerFacebookMarketingAdsApiOrStr,
)


class AdCreate(SdkBaseModel):
    name: str
    adset_id: str
    creative: Creative
    status: StatusFacebookBusinessManagerFacebookMarketingAdsApiOrStr


class AdCreateDict(TypedDict):
    name: str
    adset_id: str
    creative: CreativeDict
    status: StatusFacebookBusinessManagerFacebookMarketingAdsApiOrStr
