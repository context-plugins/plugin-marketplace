from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CompanyCrunchbaseResponse(SdkBaseModel):
    url: str


class CompanyCrunchbaseResponseDict(TypedDict):
    url: str
