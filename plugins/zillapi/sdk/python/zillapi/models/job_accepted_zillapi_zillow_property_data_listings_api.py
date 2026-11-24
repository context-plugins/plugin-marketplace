from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_zillapi_zillow_property_data_listings_api import (
    DataZillapiZillowPropertyDataListingsApi,
    DataZillapiZillowPropertyDataListingsApiDict,
)


class JobAcceptedZillapiZillowPropertyDataListingsApi(SdkBaseModel):
    data: Optional[DataZillapiZillowPropertyDataListingsApi] = UNSET
    request_id: Optional[str] = UNSET


class JobAcceptedZillapiZillowPropertyDataListingsApiDict(TypedDict):
    data: NotRequired[DataZillapiZillowPropertyDataListingsApiDict]
    request_id: NotRequired[str]
