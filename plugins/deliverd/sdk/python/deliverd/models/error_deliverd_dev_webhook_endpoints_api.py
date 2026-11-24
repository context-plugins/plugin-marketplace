from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.code import CodeOrStr


class ErrorDeliverdDevWebhookEndpointsApi(SdkBaseModel):
    code: CodeOrStr
    message: str


class ErrorDeliverdDevWebhookEndpointsApiDict(TypedDict):
    code: CodeOrStr
    message: str
