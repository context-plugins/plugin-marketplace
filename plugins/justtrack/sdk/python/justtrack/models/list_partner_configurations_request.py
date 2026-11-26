from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .list_partner_configurations_filter import ListPartnerConfigurationsFilter, ListPartnerConfigurationsFilterDict
from .required_page import RequiredPage, RequiredPageDict


class ListPartnerConfigurationsRequest(SdkBaseModel):
    filter: Optional[ListPartnerConfigurationsFilter] = UNSET
    page: RequiredPage


class ListPartnerConfigurationsRequestDict(TypedDict):
    filter: NotRequired[ListPartnerConfigurationsFilterDict]
    page: RequiredPageDict
