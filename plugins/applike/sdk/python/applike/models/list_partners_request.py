from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .list_partners_filter import ListPartnersFilter, ListPartnersFilterDict
from .required_page import RequiredPage, RequiredPageDict


class ListPartnersRequest(SdkBaseModel):
    page: RequiredPage
    filter: Optional[ListPartnersFilter] = UNSET


class ListPartnersRequestDict(TypedDict):
    page: RequiredPageDict
    filter: NotRequired[ListPartnersFilterDict]
