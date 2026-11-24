from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_rendex_rendering_batch_api import DataRendexRenderingBatchApi, DataRendexRenderingBatchApiDict
from .response_meta import ResponseMeta, ResponseMetaDict


class BatchResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    data: Optional[DataRendexRenderingBatchApi] = UNSET
    meta: Optional[ResponseMeta] = UNSET


class BatchResponseDict(TypedDict):
    success: NotRequired[bool]
    data: NotRequired[DataRendexRenderingBatchApiDict]
    meta: NotRequired[ResponseMetaDict]
