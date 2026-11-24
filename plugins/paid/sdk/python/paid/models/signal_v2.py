from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SignalV2(SdkBaseModel):
    """V2 signal schema with clean field names. IMPORTANT: Exactly one customer ID field (customer_id OR
    external_customer_id) and exactly one product ID field (product_id OR external_product_id) must be provided per
    signal."""

    event_name: str
    """The name of the event being tracked"""

    product_id: Optional[str] = UNSET
    """Paid's display ID for the product (e.g., prod_abc123). Cannot be used with external_product_id. Either this or
    external_product_id is required."""

    external_product_id: Optional[str] = UNSET
    """Your system's product ID. Cannot be used with product_id. Either this or product_id is required."""

    customer_id: Optional[str] = UNSET
    """Paid's display ID for the customer (e.g., cus_xyz789). Cannot be used with external_customer_id. Either this or
    external_customer_id is required."""

    external_customer_id: Optional[str] = UNSET
    """Your system's customer ID. Cannot be used with customer_id. Either this or customer_id is required."""

    data: Optional[dict[str, Any]] = UNSET
    """Optional additional data/metadata for the signal"""

    idempotency_key: Optional[str] = UNSET
    """A unique key to ensure idempotent signal processing. If a signal with the same idempotency key has already been
    processed, the entire batch will be rejected with a 409 Conflict error."""


class SignalV2Dict(TypedDict):
    event_name: str
    product_id: NotRequired[str]
    external_product_id: NotRequired[str]
    customer_id: NotRequired[str]
    external_customer_id: NotRequired[str]
    data: NotRequired[dict[str, Any]]
    idempotency_key: NotRequired[str]
