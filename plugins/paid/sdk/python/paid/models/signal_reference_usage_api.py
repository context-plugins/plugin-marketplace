from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SignalReferenceUsageApi(SdkBaseModel):
    """DEPRECATED: Use SignalV2 instead for cleaner field names."""

    event_name: Optional[str] = UNSET
    agent_id: Optional[str] = UNSET
    """DEPRECATED: Use product_id in SignalV2 instead."""

    external_agent_id: Optional[str] = UNSET
    """DEPRECATED: Use external_product_id in SignalV2 instead."""

    customer_id: Optional[str] = UNSET
    """DEPRECATED: The external customer id. Use ``external_customer_id`` or ``internal_customer_id`` instead."""

    data: Optional[dict[str, Any]] = UNSET
    idempotency_key: Optional[str] = UNSET
    """A unique key to ensure idempotent signal processing"""

    internal_customer_id: Optional[str] = UNSET
    """DEPRECATED: Use customer_id in SignalV2 instead. This was Paid's internal customer ID."""

    external_customer_id: Optional[str] = UNSET
    """Your system's customer ID"""


class SignalReferenceUsageApiDict(TypedDict):
    event_name: NotRequired[str]
    agent_id: NotRequired[str]
    external_agent_id: NotRequired[str]
    customer_id: NotRequired[str]
    data: NotRequired[dict[str, Any]]
    idempotency_key: NotRequired[str]
    internal_customer_id: NotRequired[str]
    external_customer_id: NotRequired[str]
