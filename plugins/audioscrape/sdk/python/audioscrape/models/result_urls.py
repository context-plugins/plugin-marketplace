from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ResultUrls(SdkBaseModel):
    episode: str
    segment: str


class ResultUrlsDict(TypedDict):
    episode: str
    segment: str
