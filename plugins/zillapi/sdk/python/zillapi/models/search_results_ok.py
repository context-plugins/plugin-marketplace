from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .meta_zillapi_zillow_property_data_listings_api import (
    MetaZillapiZillowPropertyDataListingsApi,
    MetaZillapiZillowPropertyDataListingsApiDict,
)
from .search_result_row import SearchResultRow, SearchResultRowDict


class SearchResultsOk(SdkBaseModel):
    data: Optional[list[SearchResultRow]] = UNSET
    meta: Optional[MetaZillapiZillowPropertyDataListingsApi] = UNSET
    request_id: Optional[str] = UNSET


class SearchResultsOkDict(TypedDict):
    data: NotRequired[list[SearchResultRowDict]]
    meta: NotRequired[MetaZillapiZillowPropertyDataListingsApiDict]
    request_id: NotRequired[str]
