from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV2NumbersPurchase400Error(SdkBaseModel):
    error: bool


class ApiV2NumbersPurchase400ErrorDict(TypedDict):
    error: bool
