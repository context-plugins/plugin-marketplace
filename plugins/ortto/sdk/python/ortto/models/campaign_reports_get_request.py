from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CampaignReportsGetRequest(SdkBaseModel):
    campaign_id: Optional[str] = UNSET
    asset_id: Optional[str] = UNSET


class CampaignReportsGetRequestDict(TypedDict):
    campaign_id: NotRequired[str]
    asset_id: NotRequired[str]
