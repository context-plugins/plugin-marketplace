from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data2_rendex_rendering_watch_api import Data2RendexRenderingWatchApi, Data2RendexRenderingWatchApiDict
from .response_meta import ResponseMeta, ResponseMetaDict


class V1WatchesRunResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    data: Optional[Data2RendexRenderingWatchApi] = UNSET
    meta: Optional[ResponseMeta] = UNSET


class V1WatchesRunResponseDict(TypedDict):
    success: NotRequired[bool]
    data: NotRequired[Data2RendexRenderingWatchApiDict]
    meta: NotRequired[ResponseMetaDict]
