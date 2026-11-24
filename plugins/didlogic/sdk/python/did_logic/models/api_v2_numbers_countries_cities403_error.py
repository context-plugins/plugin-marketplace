from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV2NumbersCountriesCities403Error(SdkBaseModel):
    error: str


class ApiV2NumbersCountriesCities403ErrorDict(TypedDict):
    error: str
