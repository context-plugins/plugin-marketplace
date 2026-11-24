from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.code_lusha_webhooks_api import CodeLushaWebhooksApiOrStr


class Error(SdkBaseModel):
    code: CodeLushaWebhooksApiOrStr
    message: str


class ErrorDict(TypedDict):
    code: CodeLushaWebhooksApiOrStr
    message: str
