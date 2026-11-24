from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.code_cloro_dev_countries_api import CodeCloroDevCountriesApiOrStr


class Error1CloroDevCountriesApi(SdkBaseModel):
    code: Optional[CodeCloroDevCountriesApiOrStr] = UNSET
    message: Optional[str] = UNSET
    timestamp: Optional[RFC3339DateTime] = UNSET


class Error1CloroDevCountriesApiDict(TypedDict):
    code: NotRequired[CodeCloroDevCountriesApiOrStr]
    message: NotRequired[str]
    timestamp: NotRequired[RFC3339DateTime]
