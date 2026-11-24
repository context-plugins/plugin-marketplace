from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV2NumbersCountriesCities401Error1(SdkBaseModel):
    error: str


class ApiV2NumbersCountriesCities401Error1Dict(TypedDict):
    error: str
