from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .dispute_history_item import DisputeHistoryItem, DisputeHistoryItemDict
from .dispute_order_item import DisputeOrderItem, DisputeOrderItemDict
from .enums.currency1 import Currency1OrStr
from .enums.dispute_reason import DisputeReasonOrStr
from .enums.dispute_status import DisputeStatusOrStr


class Dispute(SdkBaseModel):
    id: UUID
    """ID of the dispute."""

    attachments: list[str] | None
    """Array of links to images which were uploaded by customer."""

    payment_id: UUID
    """ID of the payment."""

    amount: str
    """Total disputed amount."""

    currency: Currency1OrStr
    """The currency of the dispute. It's always equal to the currency of the payment."""

    created_at: str
    """Date and time the Dispute was created, in UTC, and displayed in ISO 8601 datetime format."""

    expired_at: str
    """Date and time of the expiration of the Dispute, in UTC, and displayed in ISO 8601 datetime format."""

    status: DisputeStatusOrStr
    """The current status of the dispute:
      - ``new`` - dispute pending merchant approval for refund or initiate a challenge
      - ``declined`` - dispute was declined by Tabby support
      - ``cancelled`` - dispute was canceled by customer
      - ``refunded`` - dispute was approved or the order was refunded via Payments API
      - ``in_progress`` - merchant challenged dispute and need a response from Tabby support
      - ``evidence_merchant`` - waiting for evidence from the merchant
      - ``evidence_customer`` - waiting for evidence from the customer"""

    reason: DisputeReasonOrStr
    """Cause of the dispute was created (selected by customer). There are only four reasons:
      - ``unreceived_refund`` - a refund not received
      - ``identity_theft`` - I did not place this order (also known as identity theft)
      - ``product_issue`` - there was a problem with the product
      - ``not_delivered`` - the order was not delivered"""

    days_left: int
    """How many days left before dispute will be automatically approved."""

    history: list[DisputeHistoryItem]
    items: list[DisputeOrderItem]
    order_number: str
    """Merchant-assigned order number."""

    comment: str
    """The customer additional comments on the causes of the dispute."""


class DisputeDict(TypedDict):
    id: UUID
    attachments: list[str] | None
    payment_id: UUID
    amount: str
    currency: Currency1OrStr
    created_at: str
    expired_at: str
    status: DisputeStatusOrStr
    reason: DisputeReasonOrStr
    days_left: int
    history: list[DisputeHistoryItemDict]
    items: list[DisputeOrderItemDict]
    order_number: str
    comment: str
