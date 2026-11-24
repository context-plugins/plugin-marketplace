from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.result_lusha_webhooks_api import ResultLushaWebhooksApi, ResultLushaWebhooksApiDict


class CreateSubscriptionResponse(SdkBaseModel):
    total: int
    successful: int
    failed: int
    results: list[ResultLushaWebhooksApi]


class CreateSubscriptionResponseDict(TypedDict):
    total: int
    successful: int
    failed: int
    results: list[ResultLushaWebhooksApiDict]
