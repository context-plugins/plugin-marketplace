from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.result1_lusha_webhooks_api import Result1LushaWebhooksApi, Result1LushaWebhooksApiDict


class DeleteSubscriptionResponse(SdkBaseModel):
    total: int
    successful: int
    failed: int
    results: list[Result1LushaWebhooksApi]


class DeleteSubscriptionResponseDict(TypedDict):
    total: int
    successful: int
    failed: int
    results: list[Result1LushaWebhooksApiDict]
