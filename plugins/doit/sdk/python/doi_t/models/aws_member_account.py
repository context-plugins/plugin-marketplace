from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .aws_monthly_potential_savings import AwsMonthlyPotentialSavings, AwsMonthlyPotentialSavingsDict
from .stats30_d import Stats30D, Stats30DDict


class AwsMemberAccount(SdkBaseModel):
    member_account_id: str = Field(alias="memberAccountId")
    """12-digit AWS member account ID."""

    management_account_id: str = Field(alias="managementAccountId")
    """12-digit AWS management (payer) account ID of the parent AWS Organization."""

    display_name: OptionalNullable[str] = Field(default=UNSET, alias="displayName")
    """Human-readable account name, if available. Defaults to the AWS Organizations account name; may be overridden by a
    custom name set on the asset in the DoiT Console. Null when no name is available."""

    stats30d: Optional[Stats30D] = UNSET
    """Trailing 30-day aggregate metrics per SP type (``compute``, ``database``)."""

    monthly_potential_savings: Optional[AwsMonthlyPotentialSavings] = Field(
        default=UNSET, alias="monthlyPotentialSavings"
    )
    """Estimated monthly additional savings per SP type for this member account, attributed from the parent AWS
    organization's projection by share of trailing-60-day Savings Plan-eligible on-demand cost."""


class AwsMemberAccountDict(TypedDict):
    member_account_id: str
    management_account_id: str
    display_name: NotRequired[str | None]
    stats30d: NotRequired[Stats30DDict]
    monthly_potential_savings: NotRequired[AwsMonthlyPotentialSavingsDict]
