from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data1_zillapi_zillow_property_data_properties_api import (
    Data1ZillapiZillowPropertyDataPropertiesApi,
    Data1ZillapiZillowPropertyDataPropertiesApiDict,
)


class ZestimateOk(SdkBaseModel):
    data: Optional[Data1ZillapiZillowPropertyDataPropertiesApi] = UNSET
    request_id: Optional[str] = UNSET


class ZestimateOkDict(TypedDict):
    data: NotRequired[Data1ZillapiZillowPropertyDataPropertiesApiDict]
    request_id: NotRequired[str]
