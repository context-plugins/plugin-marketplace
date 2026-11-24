from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1Capabilities401Error(SdkBaseModel):
    error: str


class ApiV1Capabilities401ErrorDict(TypedDict):
    error: str
