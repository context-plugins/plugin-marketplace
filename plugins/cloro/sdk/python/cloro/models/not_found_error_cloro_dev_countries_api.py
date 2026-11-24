from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error3_cloro_dev_countries_api import Error3CloroDevCountriesApi, Error3CloroDevCountriesApiDict


class NotFoundErrorCloroDevCountriesApi(SdkBaseModel):
    success: Optional[bool] = UNSET
    error: Optional[Error3CloroDevCountriesApi] = UNSET


class NotFoundErrorCloroDevCountriesApiDict(TypedDict):
    success: NotRequired[bool]
    error: NotRequired[Error3CloroDevCountriesApiDict]
