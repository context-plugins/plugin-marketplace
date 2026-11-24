from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class CrawlRequest(SdkBaseModel):
    url: str
    enable_fallback: bool = Field(default=True, alias="enableFallback")


class CrawlRequestDict(TypedDict):
    url: str
    enable_fallback: NotRequired[bool]
