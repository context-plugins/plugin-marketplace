from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data1_rendex_rendering_watch_api import Data1RendexRenderingWatchApi, Data1RendexRenderingWatchApiDict
from .response_meta import ResponseMeta, ResponseMetaDict


class V1WatchesRunsResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    data: Optional[Data1RendexRenderingWatchApi] = UNSET
    meta: Optional[ResponseMeta] = UNSET


class V1WatchesRunsResponseDict(TypedDict):
    success: NotRequired[bool]
    data: NotRequired[Data1RendexRenderingWatchApiDict]
    meta: NotRequired[ResponseMetaDict]
