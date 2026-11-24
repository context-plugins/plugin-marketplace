from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .unions.attribution import Attribution, AttributionDict
from .unions.customer_attribution import CustomerAttribution, CustomerAttributionDict


class Signal(SdkBaseModel):
    event_name: str = Field(alias="eventName")
    customer: CustomerAttribution
    attribution: Optional[Attribution] = UNSET
    timestamp: Optional[RFC3339DateTime] = UNSET
    """True event timestamp in RFC3339 format with timezone (e.g. 2026-01-31T23:00:00Z)"""

    data: Optional[dict[str, Any]] = UNSET
    idempotency_key: Optional[str] = Field(default=UNSET, alias="idempotencyKey")


class SignalDict(TypedDict):
    event_name: str
    customer: CustomerAttributionDict
    attribution: NotRequired[AttributionDict]
    timestamp: NotRequired[RFC3339DateTime]
    data: NotRequired[dict[str, Any]]
    idempotency_key: NotRequired[str]
