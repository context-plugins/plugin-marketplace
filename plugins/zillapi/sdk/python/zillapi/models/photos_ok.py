from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .meta_zillapi_zillow_property_data_properties_api import (
    MetaZillapiZillowPropertyDataPropertiesApi,
    MetaZillapiZillowPropertyDataPropertiesApiDict,
)
from .photo import Photo, PhotoDict


class PhotosOk(SdkBaseModel):
    data: Optional[list[Photo]] = UNSET
    meta: Optional[MetaZillapiZillowPropertyDataPropertiesApi] = UNSET
    request_id: Optional[str] = UNSET


class PhotosOkDict(TypedDict):
    data: NotRequired[list[PhotoDict]]
    meta: NotRequired[MetaZillapiZillowPropertyDataPropertiesApiDict]
    request_id: NotRequired[str]
