from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .webhook_event_type import WebhookEventType, WebhookEventTypeDict


class OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse(SdkBaseModel):
    value: Optional[list[WebhookEventType]] = UNSET


class OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponseDict(TypedDict):
    value: NotRequired[list[WebhookEventTypeDict]]
