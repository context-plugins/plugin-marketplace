from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reason import ReasonOrStr


class ApiV1DisputesChallengeRequest(SdkBaseModel):
    dispute_id: str
    """ID of the dispute"""

    description: str
    """Comment for Tabby support."""

    reason: ReasonOrStr
    """Reason for requesting dispute challenge:
      - ``merchant_reason_other`` - there were other problems with the order that required further clarification;
      - ``merchant_reason_order_on_its_way`` - the order has been confirmed and is in the process of being delivered;
      - ``merchant_reason_order_has_been_already_delivered`` - the order has already been delivered and is complete;
      - ``merchant_reason_order_amount_should_be_different`` - there was a problem with the amount of the order and it
            needed to be changed;
      - ``merchant_reason_problem_with_delivery`` - there was a problem with the order during delivery that needed to be
            adjusted and resolved."""

    amount: Optional[str] = UNSET
    """If the dispute challenged with reason ``merchant_reason_order_amount_should_be_different`` - a new disputed
    amount is required."""

    attachment_ids: Optional[list[UUID]] = UNSET
    """Attachment ID that will be attached. ID can be received via ``upload attachment`` endpoint."""


class ApiV1DisputesChallengeRequestDict(TypedDict):
    dispute_id: str
    description: str
    reason: ReasonOrStr
    amount: NotRequired[str]
    attachment_ids: NotRequired[list[UUID]]
