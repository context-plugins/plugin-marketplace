from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CountryFilter(SdkBaseModel):
    name: str
    code: str


class CountryFilterDict(TypedDict):
    name: str
    code: str
