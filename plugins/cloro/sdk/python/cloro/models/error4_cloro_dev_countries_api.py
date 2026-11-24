from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Error4CloroDevCountriesApi(SdkBaseModel):
    code: Optional[str] = UNSET
    message: Optional[str] = UNSET
    timestamp: Optional[RFC3339DateTime] = UNSET


class Error4CloroDevCountriesApiDict(TypedDict):
    code: NotRequired[str]
    message: NotRequired[str]
    timestamp: NotRequired[RFC3339DateTime]
