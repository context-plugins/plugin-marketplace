from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Data1RendexRenderingScreenshotApi(SdkBaseModel):
    url: Optional[str] = UNSET
    """The signed render URL to embed"""

    expires_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="expiresAt")
    format: Optional[str] = UNSET
    cache_ttl: Optional[int] = Field(default=UNSET, alias="cacheTtl")


class Data1RendexRenderingScreenshotApiDict(TypedDict):
    url: NotRequired[str]
    expires_at: NotRequired[RFC3339DateTime]
    format: NotRequired[str]
    cache_ttl: NotRequired[int]
