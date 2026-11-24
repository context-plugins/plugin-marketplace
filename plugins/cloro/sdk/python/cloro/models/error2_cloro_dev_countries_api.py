from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Error2CloroDevCountriesApi(SdkBaseModel):
    code: Optional[str] = UNSET
    message: Optional[str] = UNSET
    """For example ``Maximum retries exceeded`` when every attempt failed, or ``Internal server error`` for an
    unexpected failure."""

    timestamp: Optional[RFC3339DateTime] = UNSET


class Error2CloroDevCountriesApiDict(TypedDict):
    code: NotRequired[str]
    message: NotRequired[str]
    timestamp: NotRequired[RFC3339DateTime]
