from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV2NumbersCountriesCitiesDids404Error(SdkBaseModel):
    error: str


class ApiV2NumbersCountriesCitiesDids404ErrorDict(TypedDict):
    error: str
