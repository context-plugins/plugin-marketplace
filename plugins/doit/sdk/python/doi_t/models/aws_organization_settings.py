from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.commitment_term import CommitmentTermOrStr
from .enums.payment_option import PaymentOptionOrStr
from .enums.purchase_mode import PurchaseModeOrStr


class AwsOrganizationSettings(SdkBaseModel):
    """Organization-specific recommendation and automation settings for one activated commitment type."""

    purchase_mode: PurchaseModeOrStr = Field(alias="purchaseMode")
    """Whether purchases execute automatically or require customer approval before the planner proceeds. Configured in
    the DoiT Console Settings tab; this settings API is read-only."""

    minimum_commitment: float = Field(alias="minimumCommitment")
    """Minimum hourly commitment amount (USD) per purchase step."""

    last_day_of_month_for_purchase: int = Field(default=25, alias="lastDayOfMonthForPurchase")
    """Latest calendar day of the month (1–28) on which new purchases may be scheduled. After this day, the No Purchase
    Window applies until the next month. Default is 25; the maximum allowed value is 28 to leave a buffer before
    month-end billing cycles."""

    maximum_commitment: float = Field(alias="maximumCommitment")
    """Maximum total hourly commitment (USD). ``0`` means no cap. Always present on settings responses."""

    term: CommitmentTermOrStr
    """Preferred commitment term length for new purchases."""

    payment_option: PaymentOptionOrStr = Field(alias="paymentOption")
    """Preferred payment structure for new commitments."""

    policy: str
    """Coverage target policy for recommendations and purchases (built-in or customer-defined)."""

    upfront_percentage: Optional[float] = Field(default=UNSET, alias="upfrontPercentage")
    """Fraction of total cost paid upfront (0–1) when ``paymentOption`` is ``partial_upfront``. In the DoiT Console this
    is set as 50–99% and applies to AWS Compute only; Database uses ``no_upfront`` only."""


class AwsOrganizationSettingsDict(TypedDict):
    purchase_mode: PurchaseModeOrStr
    minimum_commitment: float
    last_day_of_month_for_purchase: int
    maximum_commitment: float
    term: CommitmentTermOrStr
    payment_option: PaymentOptionOrStr
    policy: str
    upfront_percentage: NotRequired[float]
