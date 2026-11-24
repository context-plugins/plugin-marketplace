from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_rendex_rendering_jobs_api import DataRendexRenderingJobsApi, DataRendexRenderingJobsApiDict
from .response_meta import ResponseMeta, ResponseMetaDict


class BatchStatusResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    data: Optional[DataRendexRenderingJobsApi] = UNSET
    meta: Optional[ResponseMeta] = UNSET


class BatchStatusResponseDict(TypedDict):
    success: NotRequired[bool]
    data: NotRequired[DataRendexRenderingJobsApiDict]
    meta: NotRequired[ResponseMetaDict]
