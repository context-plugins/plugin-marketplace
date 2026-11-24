from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .meta1_zillapi_zillow_property_data_properties_api import (
    Meta1ZillapiZillowPropertyDataPropertiesApi,
    Meta1ZillapiZillowPropertyDataPropertiesApiDict,
)
from .open_house import OpenHouse, OpenHouseDict


class OpenHousesOk(SdkBaseModel):
    data: Optional[list[OpenHouse]] = UNSET
    meta: Optional[Meta1ZillapiZillowPropertyDataPropertiesApi] = UNSET
    request_id: Optional[str] = UNSET


class OpenHousesOkDict(TypedDict):
    data: NotRequired[list[OpenHouseDict]]
    meta: NotRequired[Meta1ZillapiZillowPropertyDataPropertiesApiDict]
    request_id: NotRequired[str]
