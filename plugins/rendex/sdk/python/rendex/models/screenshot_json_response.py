from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_rendex_rendering_screenshot_api import DataRendexRenderingScreenshotApi, DataRendexRenderingScreenshotApiDict
from .response_meta import ResponseMeta, ResponseMetaDict


class ScreenshotJsonResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    data: Optional[DataRendexRenderingScreenshotApi] = UNSET
    meta: Optional[ResponseMeta] = UNSET


class ScreenshotJsonResponseDict(TypedDict):
    success: NotRequired[bool]
    data: NotRequired[DataRendexRenderingScreenshotApiDict]
    meta: NotRequired[ResponseMetaDict]
