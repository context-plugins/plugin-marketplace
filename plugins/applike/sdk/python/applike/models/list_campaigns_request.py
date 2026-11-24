from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .list_campaigns_filter import ListCampaignsFilter, ListCampaignsFilterDict
from .required_page import RequiredPage, RequiredPageDict


class ListCampaignsRequest(SdkBaseModel):
    page: RequiredPage
    filter: Optional[ListCampaignsFilter] = UNSET


class ListCampaignsRequestDict(TypedDict):
    page: RequiredPageDict
    filter: NotRequired[ListCampaignsFilterDict]
