from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV2NumbersCountriesCities404Error(SdkBaseModel):
    error: str


class ApiV2NumbersCountriesCities404ErrorDict(TypedDict):
    error: str
