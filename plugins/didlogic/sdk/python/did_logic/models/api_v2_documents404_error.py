from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV2Documents404Error(SdkBaseModel):
    error: str


class ApiV2Documents404ErrorDict(TypedDict):
    error: str
