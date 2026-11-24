from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class VersionsPublishAnonResponse(SdkBaseModel):
    url: str


class VersionsPublishAnonResponseDict(TypedDict):
    url: str
