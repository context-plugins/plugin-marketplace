from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.repayment_type1 import RepaymentType1OrStr


class Loan(SdkBaseModel):
    start_date: Optional[str] = Field(default=UNSET, alias="startDate")
    """Start date for the loan."""

    end_date: Optional[str] = Field(default=UNSET, alias="endDate")
    """Date that the loan is due to be repaid in full."""

    repayment_type: Optional[RepaymentType1OrStr] = Field(default=UNSET, alias="repaymentType")
    """Options in place for repayments. If absent defaults to PRINCIPAL_AND_INTEREST."""

    original_loan_amount: Optional[str] = Field(default=UNSET, alias="originalLoanAmount")
    """Optional loan value."""

    original_loan_currency: Optional[str] = Field(default=UNSET, alias="originalLoanCurrency")
    """If absent assumes AUD."""

    min_instalment_amount: Optional[str] = Field(default=UNSET, alias="minInstalmentAmount")
    """Minimum amount of next instalment."""

    next_instalment_date: Optional[str] = Field(default=UNSET, alias="nextInstalmentDate")
    """Next date that an instalment is required."""

    min_instalment_currency: Optional[str] = Field(default=UNSET, alias="minInstalmentCurrency")
    """If absent assumes AUD."""

    max_redraw: Optional[str] = Field(default=UNSET, alias="maxRedraw")
    """Maximum amount of funds that can be redrawn. If not present, redraw is not available even if the feature exists
    for the account."""

    max_redraw_currency: Optional[str] = Field(default=UNSET, alias="maxRedrawCurrency")
    """If absent assumes AUD."""

    min_redraw: Optional[str] = Field(default=UNSET, alias="minRedraw")
    """Minimum redraw amount."""

    min_redraw_currency: Optional[str] = Field(default=UNSET, alias="minRedrawCurrency")
    """If absent assumes AUD."""

    repayment_frequency: Optional[str] = Field(default=UNSET, alias="repaymentFrequency")
    """The expected or required repayment frequency. Formatted according to ISO 8601 Durations (excludes recurrence
    syntax)."""

    offset_account_ids: Optional[list[str]] = Field(default=UNSET, alias="offsetAccountIds")
    """The accountIDs of the configured offset accounts attached to this loan. Only offset accounts that can be accessed
    under the current authorisation should be included. It is expected behaviour that offsetAccountEnabled is set to
    true but the offsetAccountIds field is absent or empty. This represents a situation where an offset account exists
    but details can not be accessed under the current authorisation."""

    offset_account_enabled: Optional[bool] = Field(default=UNSET, alias="offsetAccountEnabled")
    """Set to true if one or more offset accounts are configured for this loan account."""


class LoanDict(TypedDict):
    start_date: NotRequired[str]
    end_date: NotRequired[str]
    repayment_type: NotRequired[RepaymentType1OrStr]
    original_loan_amount: NotRequired[str]
    original_loan_currency: NotRequired[str]
    min_instalment_amount: NotRequired[str]
    next_instalment_date: NotRequired[str]
    min_instalment_currency: NotRequired[str]
    max_redraw: NotRequired[str]
    max_redraw_currency: NotRequired[str]
    min_redraw: NotRequired[str]
    min_redraw_currency: NotRequired[str]
    repayment_frequency: NotRequired[str]
    offset_account_ids: NotRequired[list[str]]
    offset_account_enabled: NotRequired[bool]
