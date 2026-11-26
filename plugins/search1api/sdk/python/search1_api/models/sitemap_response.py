from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SitemapResponse(SdkBaseModel):
    links: list[str]


class SitemapResponseDict(TypedDict):
    links: list[str]
