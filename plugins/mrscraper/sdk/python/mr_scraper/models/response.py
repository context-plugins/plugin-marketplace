from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .gateway_async_task_response import GatewayAsyncTaskResponse, GatewayAsyncTaskResponseDict


class Response(SdkBaseModel):
    data: Optional[GatewayAsyncTaskResponse] = UNSET
    message: Optional[str] = UNSET


class ResponseDict(TypedDict):
    data: NotRequired[GatewayAsyncTaskResponseDict]
    message: NotRequired[str]
