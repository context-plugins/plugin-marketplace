from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class CommitmentPeriod(SdkBaseModel):
    """A single period within a commitment."""

    start_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startDate")
    """The start date of the period."""

    end_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="endDate")
    """The end date of the period."""

    commitment_value: Optional[float] = Field(default=UNSET, alias="commitmentValue")
    """The commitment value for this period."""

    marketplace_limit_percentage: Optional[float] = Field(default=UNSET, alias="marketplaceLimitPercentage")
    """The marketplace limit as a percentage (0-100)."""

    marketplace_spend: Optional[float] = Field(default=UNSET, alias="marketplaceSpend")
    """The marketplace spend within this period."""

    marketplace_limit_amount: Optional[float] = Field(default=UNSET, alias="marketplaceLimitAmount")
    """The marketplace limit in absolute currency for this period, derived as commitmentValue *
    marketplaceLimitPercentage / 100."""

    forecast_value: Optional[float] = Field(default=UNSET, alias="forecastValue")
    """The projected spend at the end of this period, based on a linear regression over the period's total spend series.
    0 when insufficient history is available to compute a forecast."""

    cash_attainment: Optional[float] = Field(default=UNSET, alias="cashAttainment")
    """This period's own attained spend, on a cash basis. This is eligible spend (including capped marketplace spend and
    credits) plus adjustments, excluding anything carried in from the previous period. Summed across periods it equals
    ``totalCurrentAttainment``. To measure the period against its ``commitmentValue`` the way the console does, use
    ``cashAttainment + rolloverFromPrevPeriod + shortfallRollover``; the period's remaining amount is
    ``commitmentValue`` minus that. Excess carried out to the next period is not deducted from this period."""

    rollover_from_prev_period: Optional[float] = Field(default=UNSET, alias="rolloverFromPrevPeriod")
    """The amount carried into this period from the previous period under the commitment's rollover terms. Positive for
    excess rollover, negative for shortfall rollover, 0 when nothing was carried (always 0 for the first period).
    amazon-web-services commitments no longer roll over, so this is 0 for them unless the commitment was last calculated
    before that change. Not included in ``cashAttainment`` or ``totalCurrentAttainment``."""

    shortfall_rollover: Optional[float] = Field(default=UNSET, alias="shortfallRollover")
    """The part of this period's shortfall carried forward to the next period under the commitment's shortfall rollover
    terms, where it appears as a negative ``rolloverFromPrevPeriod``. 0 when nothing was carried forward, including
    while the period is still open and for the last period. The console counts this amount as met within this period.
    Not included in ``cashAttainment`` or ``totalCurrentAttainment``."""


class CommitmentPeriodDict(TypedDict):
    start_date: NotRequired[RFC3339DateTime]
    end_date: NotRequired[RFC3339DateTime]
    commitment_value: NotRequired[float]
    marketplace_limit_percentage: NotRequired[float]
    marketplace_spend: NotRequired[float]
    marketplace_limit_amount: NotRequired[float]
    forecast_value: NotRequired[float]
    cash_attainment: NotRequired[float]
    rollover_from_prev_period: NotRequired[float]
    shortfall_rollover: NotRequired[float]
