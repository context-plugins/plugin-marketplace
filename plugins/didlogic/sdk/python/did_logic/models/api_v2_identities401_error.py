from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV2Identities401Error(SdkBaseModel):
    error: str


class ApiV2Identities401ErrorDict(TypedDict):
    error: str
