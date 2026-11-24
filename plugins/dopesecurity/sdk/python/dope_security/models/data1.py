from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Data1(SdkBaseModel):
    urls: list[str]


class Data1Dict(TypedDict):
    urls: list[str]
