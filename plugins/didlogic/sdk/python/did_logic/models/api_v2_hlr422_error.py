from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV2Hlr422Error(SdkBaseModel):
    error: str


class ApiV2Hlr422ErrorDict(TypedDict):
    error: str
