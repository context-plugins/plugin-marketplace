from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .list_bids_filter import ListBidsFilter, ListBidsFilterDict
from .required_page import RequiredPage, RequiredPageDict


class ListBidsRequest(SdkBaseModel):
    page: RequiredPage
    filter: Optional[ListBidsFilter] = UNSET


class ListBidsRequestDict(TypedDict):
    page: RequiredPageDict
    filter: NotRequired[ListBidsFilterDict]
