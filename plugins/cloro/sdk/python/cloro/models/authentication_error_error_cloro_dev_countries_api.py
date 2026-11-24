from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error1_cloro_dev_countries_api import Error1CloroDevCountriesApi, Error1CloroDevCountriesApiDict


class AuthenticationErrorErrorCloroDevCountriesApi(SdkBaseModel):
    success: Optional[bool] = UNSET
    error: Optional[Error1CloroDevCountriesApi] = UNSET


class AuthenticationErrorErrorCloroDevCountriesApiDict(TypedDict):
    success: NotRequired[bool]
    error: NotRequired[Error1CloroDevCountriesApiDict]
