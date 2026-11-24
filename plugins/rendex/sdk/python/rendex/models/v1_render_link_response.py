from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data1_rendex_rendering_screenshot_api import (
    Data1RendexRenderingScreenshotApi,
    Data1RendexRenderingScreenshotApiDict,
)


class V1RenderLinkResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    data: Optional[Data1RendexRenderingScreenshotApi] = UNSET


class V1RenderLinkResponseDict(TypedDict):
    success: NotRequired[bool]
    data: NotRequired[Data1RendexRenderingScreenshotApiDict]
