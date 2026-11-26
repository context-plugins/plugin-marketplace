from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ExtractParameters(SdkBaseModel):
    url: str


class ExtractParametersDict(TypedDict):
    url: str
