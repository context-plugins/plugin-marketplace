from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class WebhookTestResponse(SdkBaseModel):
    success: bool


class WebhookTestResponseDict(TypedDict):
    success: bool
