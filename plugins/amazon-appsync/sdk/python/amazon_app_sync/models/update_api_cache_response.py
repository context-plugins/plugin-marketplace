from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .api_cache import ApiCache, ApiCacheDict


class UpdateApiCacheResponse(SdkBaseModel):
    api_cache: Optional[ApiCache] = Field(default=UNSET, alias="apiCache")


class UpdateApiCacheResponseDict(TypedDict):
    api_cache: NotRequired[ApiCacheDict]
