from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error_cloro_dev_countries_api import ErrorCloroDevCountriesApi, ErrorCloroDevCountriesApiDict


class ValidationErrorCloroDevCountriesApi(SdkBaseModel):
    success: Optional[bool] = UNSET
    error: Optional[ErrorCloroDevCountriesApi] = UNSET


class ValidationErrorCloroDevCountriesApiDict(TypedDict):
    success: NotRequired[bool]
    error: NotRequired[ErrorCloroDevCountriesApiDict]
