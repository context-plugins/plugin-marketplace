from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.status_juri_sign_webhooks_api import StatusJuriSignWebhooksApiOrStr


class WebhookLog(SdkBaseModel):
    id: Optional[int] = UNSET
    event: Optional[str] = UNSET
    status: Optional[StatusJuriSignWebhooksApiOrStr] = UNSET
    response_status: OptionalNullable[int] = UNSET
    attempts: Optional[int] = UNSET
    next_retry_at: OptionalNullable[RFC3339DateTime] = UNSET
    created_at: Optional[RFC3339DateTime] = UNSET


class WebhookLogDict(TypedDict):
    id: NotRequired[int]
    event: NotRequired[str]
    status: NotRequired[StatusJuriSignWebhooksApiOrStr]
    response_status: NotRequired[int | None]
    attempts: NotRequired[int]
    next_retry_at: NotRequired[RFC3339DateTime | None]
    created_at: NotRequired[RFC3339DateTime]
