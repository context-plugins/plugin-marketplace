from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_zillapi_zillow_property_data_properties_api import (
    DataZillapiZillowPropertyDataPropertiesApi,
    DataZillapiZillowPropertyDataPropertiesApiDict,
)


class AgentOk(SdkBaseModel):
    data: Optional[DataZillapiZillowPropertyDataPropertiesApi] = UNSET
    request_id: Optional[str] = UNSET


class AgentOkDict(TypedDict):
    data: NotRequired[DataZillapiZillowPropertyDataPropertiesApiDict]
    request_id: NotRequired[str]
