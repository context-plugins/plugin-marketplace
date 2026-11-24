from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV2NumbersPurchase401Error(SdkBaseModel):
    error: str


class ApiV2NumbersPurchase401ErrorDict(TypedDict):
    error: str
