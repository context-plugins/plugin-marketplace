from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_rendex_rendering_watch_api import DataRendexRenderingWatchApi, DataRendexRenderingWatchApiDict
from .response_meta import ResponseMeta, ResponseMetaDict


class V1WatchesResponse1(SdkBaseModel):
    success: Optional[bool] = UNSET
    data: Optional[DataRendexRenderingWatchApi] = UNSET
    meta: Optional[ResponseMeta] = UNSET


class V1WatchesResponse1Dict(TypedDict):
    success: NotRequired[bool]
    data: NotRequired[DataRendexRenderingWatchApiDict]
    meta: NotRequired[ResponseMetaDict]
