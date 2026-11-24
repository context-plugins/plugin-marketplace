from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .details_cloro_dev_countries_api import DetailsCloroDevCountriesApi, DetailsCloroDevCountriesApiDict


class Error3CloroDevCountriesApi(SdkBaseModel):
    code: Optional[str] = UNSET
    message: Optional[str] = UNSET
    details: Optional[DetailsCloroDevCountriesApi] = UNSET
    timestamp: Optional[RFC3339DateTime] = UNSET


class Error3CloroDevCountriesApiDict(TypedDict):
    code: NotRequired[str]
    message: NotRequired[str]
    details: NotRequired[DetailsCloroDevCountriesApiDict]
    timestamp: NotRequired[RFC3339DateTime]
