from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV2NumbersCountriesRegions404Error(SdkBaseModel):
    error: str


class ApiV2NumbersCountriesRegions404ErrorDict(TypedDict):
    error: str
