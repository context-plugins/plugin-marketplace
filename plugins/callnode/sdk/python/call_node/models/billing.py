from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Billing(SdkBaseModel):
    """On the send response only - how the message was priced."""

    recipients: Optional[int] = UNSET
    """to + cc + bcc."""

    included_recipients: Optional[int] = Field(default=UNSET, alias="includedRecipients")
    """How many of them fell inside the plan's included allowance this period."""

    billable_recipients: Optional[int] = Field(default=UNSET, alias="billableRecipients")
    per_recipient_usd: Optional[float] = Field(default=UNSET, alias="perRecipientUsd")
    """The marginal rate applied."""

    estimated_cost_usd: Optional[float] = Field(default=UNSET, alias="estimatedCostUsd")
    """The amount charged (the quote"""

    included_remaining: Optional[int] = Field(default=UNSET, alias="includedRemaining")
    """Included recipients left this period after this message."""

    period_ends_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="periodEndsAt")
    """When the volume window resets."""


class BillingDict(TypedDict):
    recipients: NotRequired[int]
    included_recipients: NotRequired[int]
    billable_recipients: NotRequired[int]
    per_recipient_usd: NotRequired[float]
    estimated_cost_usd: NotRequired[float]
    included_remaining: NotRequired[int]
    period_ends_at: NotRequired[RFC3339DateTime]
