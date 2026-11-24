from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error2_cloro_dev_countries_api import Error2CloroDevCountriesApi, Error2CloroDevCountriesApiDict


class InternalErrorCloroDevCountriesApi(SdkBaseModel):
    success: Optional[bool] = UNSET
    error: Optional[Error2CloroDevCountriesApi] = UNSET


class InternalErrorCloroDevCountriesApiDict(TypedDict):
    success: NotRequired[bool]
    error: NotRequired[Error2CloroDevCountriesApiDict]
