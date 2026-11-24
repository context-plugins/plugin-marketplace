from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error_deliverd_dev_webhook_endpoints_api import (
    ErrorDeliverdDevWebhookEndpointsApi,
    ErrorDeliverdDevWebhookEndpointsApiDict,
)


class ApiV1WebhookEndpoints403Error(SdkBaseModel):
    error: ErrorDeliverdDevWebhookEndpointsApi


class ApiV1WebhookEndpoints403ErrorDict(TypedDict):
    error: ErrorDeliverdDevWebhookEndpointsApiDict
