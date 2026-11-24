from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.deposit_rate_type import DepositRateTypeOrStr
from .tier import Tier, TierDict


class DepositRate(SdkBaseModel):
    deposit_rate_type: DepositRateTypeOrStr = Field(alias="depositRateType")
    """The type of rate (base, bonus, etc)."""

    rate: str
    """The rate to be applied."""

    calculation_frequency: Optional[str] = Field(default=UNSET, alias="calculationFrequency")
    """The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation
    of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the
    account (see applicationFrequency). Formatted according to ISO 8601 Durations (excludes recurrence syntax)."""

    application_frequency: Optional[str] = Field(default=UNSET, alias="applicationFrequency")
    """The period after which the calculated amount(s) are 'applied' (i.e. debited or credited) to the account."""

    tiers: OptionalNullable[list[Tier]] = UNSET
    additional_value: Optional[str] = Field(default=UNSET, alias="additionalValue")
    """Generic field containing additional information relevant to the lendingRateType specified. Whether mandatory or
    not is dependent on the value of lendingRateType."""

    additional_info: Optional[str] = Field(default=UNSET, alias="additionalInfo")
    """Display text providing more information on the rate."""

    additional_info_uri: Optional[str] = Field(default=UNSET, alias="additionalInfoUri")
    """Link to a web page with more information on this rate."""


class DepositRateDict(TypedDict):
    deposit_rate_type: DepositRateTypeOrStr
    rate: str
    calculation_frequency: NotRequired[str]
    application_frequency: NotRequired[str]
    tiers: NotRequired[list[TierDict] | None]
    additional_value: NotRequired[str]
    additional_info: NotRequired[str]
    additional_info_uri: NotRequired[str]
