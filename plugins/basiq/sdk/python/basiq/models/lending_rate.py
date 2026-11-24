from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.interest_payment_due import InterestPaymentDueOrStr
from .enums.lending_rate_type import LendingRateTypeOrStr
from .enums.loan_purpose import LoanPurposeOrStr
from .enums.repayment_type import RepaymentTypeOrStr
from .tier import Tier, TierDict


class LendingRate(SdkBaseModel):
    lending_rate_type: LendingRateTypeOrStr = Field(alias="lendingRateType")
    """The type of rate (fixed, variable, etc)."""

    rate: str
    """The rate to be applied."""

    comparison_rate: Optional[str] = Field(default=UNSET, alias="comparisonRate")
    """A comparison rate equivalent for this rate."""

    calculation_frequency: Optional[str] = Field(default=UNSET, alias="calculationFrequency")
    """The period after which the rate is applied to the balance to calculate the amount due for the period. Calculation
    of the amount is often daily (as balances may change) but accumulated until the total amount is 'applied' to the
    account (see applicationFrequency). Formatted according to ISO 8601 Durations (excludes recurrence syntax)."""

    application_frequency: Optional[str] = Field(default=UNSET, alias="applicationFrequency")
    """The period after which the calculated amount(s) (see calculationFrequency) are 'applied' (i.e. debited or
    credited) to the account. Formatted according to ISO 8601 Durations (excludes recurrence syntax)."""

    interest_payment_due: Optional[InterestPaymentDueOrStr] = Field(default=UNSET, alias="interestPaymentDue")
    """When loan payments are due to be paid within each period. The investment benefit of earlier payments affect the
    rate that can be offered."""

    repayment_type: Optional[RepaymentTypeOrStr] = Field(default=UNSET, alias="repaymentType")
    """Options in place for repayments. If absent, the lending rate is applicable to all repayment types."""

    loan_purpose: Optional[LoanPurposeOrStr] = Field(default=UNSET, alias="loanPurpose")
    """The reason for taking out the loan. If absent, the lending rate is applicable to all loan purposes."""

    tiers: OptionalNullable[list[Tier]] = UNSET
    additional_value: Optional[str] = Field(default=UNSET, alias="additionalValue")
    """Generic field containing additional information relevant to the depositRateType specified. Whether mandatory or
    not is dependent on the value of depositRateType."""

    additional_info: Optional[str] = Field(default=UNSET, alias="additionalInfo")
    """Display text providing more information on the rate."""

    additional_info_uri: Optional[str] = Field(default=UNSET, alias="additionalInfoUri")
    """Link to a web page with more information on this rate."""


class LendingRateDict(TypedDict):
    lending_rate_type: LendingRateTypeOrStr
    rate: str
    comparison_rate: NotRequired[str]
    calculation_frequency: NotRequired[str]
    application_frequency: NotRequired[str]
    interest_payment_due: NotRequired[InterestPaymentDueOrStr]
    repayment_type: NotRequired[RepaymentTypeOrStr]
    loan_purpose: NotRequired[LoanPurposeOrStr]
    tiers: NotRequired[list[TierDict] | None]
    additional_value: NotRequired[str]
    additional_info: NotRequired[str]
    additional_info_uri: NotRequired[str]
