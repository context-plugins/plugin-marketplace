from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.kind import KindOrStr


class Destination(SdkBaseModel):
    key: str
    """``webhook:<id>`` or ``integration:<id>`` — the value the retry endpoint accepts as destinationKey."""

    kind: KindOrStr
    label: str
    """How to name this destination: the provider for an integration, and for a webhook the connector that created it
    (“Zapier”, “n8n”) or its host plus a short fingerprint of the path. The full URL is never returned here."""

    detail: str | None
    delivered: int
    pending: int
    failed: int
    next_retry_at: int | None = Field(alias="nextRetryAt")
    last_delivered_at: int | None = Field(alias="lastDeliveredAt")
    failing_since: int | None = Field(alias="failingSince")
    last_error: str | None = Field(alias="lastError")


class DestinationDict(TypedDict):
    key: str
    kind: KindOrStr
    label: str
    detail: str | None
    delivered: int
    pending: int
    failed: int
    next_retry_at: int | None
    last_delivered_at: int | None
    failing_since: int | None
    last_error: str | None
