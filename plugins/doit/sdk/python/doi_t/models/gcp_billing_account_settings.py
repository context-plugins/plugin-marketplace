from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.commitment_term import CommitmentTermOrStr
from .enums.purchase_mode import PurchaseModeOrStr


class GcpBillingAccountSettings(SdkBaseModel):
    """Recommendation and automation engine settings for one product line on a GCP billing account."""

    purchase_mode: PurchaseModeOrStr = Field(alias="purchaseMode")
    """Whether purchases execute automatically or require customer approval before the planner proceeds. Configured in
    the DoiT Console Settings tab; this settings API is read-only."""

    minimum_commitment: float = Field(alias="minimumCommitment")
    """Minimum hourly commitment amount (USD) per purchase step."""

    last_day_of_month_for_purchase: int = Field(alias="lastDayOfMonthForPurchase")
    """Latest calendar day of the month on which a purchase may be scheduled."""

    maximum_commitment: float = Field(alias="maximumCommitment")
    """Maximum total hourly commitment (USD). ``0`` means no cap."""

    term: CommitmentTermOrStr
    """Preferred commitment term length for new purchases."""

    policy: str
    """Coverage target policy for recommendations and purchases (built-in or customer-defined)."""


class GcpBillingAccountSettingsDict(TypedDict):
    purchase_mode: PurchaseModeOrStr
    minimum_commitment: float
    last_day_of_month_for_purchase: int
    maximum_commitment: float
    term: CommitmentTermOrStr
    policy: str
