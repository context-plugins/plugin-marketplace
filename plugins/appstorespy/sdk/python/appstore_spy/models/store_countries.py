from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StoreCountries(SdkBaseModel):
    countries: list[str]


class StoreCountriesDict(TypedDict):
    countries: list[str]
