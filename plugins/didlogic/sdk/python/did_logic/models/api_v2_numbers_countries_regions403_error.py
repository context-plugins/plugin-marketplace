from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV2NumbersCountriesRegions403Error(SdkBaseModel):
    error: str


class ApiV2NumbersCountriesRegions403ErrorDict(TypedDict):
    error: str
