from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error4_cloro_dev_countries_api import Error4CloroDevCountriesApi, Error4CloroDevCountriesApiDict


class RateLimitErrorCloroDevCountriesApi(SdkBaseModel):
    success: Optional[bool] = UNSET
    error: Optional[Error4CloroDevCountriesApi] = UNSET


class RateLimitErrorCloroDevCountriesApiDict(TypedDict):
    success: NotRequired[bool]
    error: NotRequired[Error4CloroDevCountriesApiDict]
