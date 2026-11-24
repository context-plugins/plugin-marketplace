from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class WebhookDelivery(SdkBaseModel):
    id: Optional[int] = UNSET
    job_id: OptionalNullable[UUID] = UNSET
    event: Optional[str] = UNSET
    attempt: Optional[int] = UNSET
    status_code: OptionalNullable[int] = UNSET
    delivered: Optional[bool] = UNSET
    attempted_at: Optional[RFC3339DateTime] = UNSET
    response_preview: OptionalNullable[str] = UNSET


class WebhookDeliveryDict(TypedDict):
    id: NotRequired[int]
    job_id: NotRequired[UUID | None]
    event: NotRequired[str]
    attempt: NotRequired[int]
    status_code: NotRequired[int | None]
    delivered: NotRequired[bool]
    attempted_at: NotRequired[RFC3339DateTime]
    response_preview: NotRequired[str | None]
