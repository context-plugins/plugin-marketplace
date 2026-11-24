from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV2NumbersCountriesCitiesDids401Error(SdkBaseModel):
    error: str


class ApiV2NumbersCountriesCitiesDids401ErrorDict(TypedDict):
    error: str
