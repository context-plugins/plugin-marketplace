from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GatewayRequestBody(SdkBaseModel):
    action: Optional[str] = UNSET
    agent: Optional[str] = UNSET
    domain: Optional[str] = UNSET
    prompt: Optional[str] = UNSET
    stream: Optional[bool] = UNSET
    task_details: Optional[Any] = UNSET
    token_usage: Optional[int] = UNSET
    url: Optional[str] = UNSET


class GatewayRequestBodyDict(TypedDict):
    action: NotRequired[str]
    agent: NotRequired[str]
    domain: NotRequired[str]
    prompt: NotRequired[str]
    stream: NotRequired[bool]
    task_details: NotRequired[Any]
    token_usage: NotRequired[int]
    url: NotRequired[str]
