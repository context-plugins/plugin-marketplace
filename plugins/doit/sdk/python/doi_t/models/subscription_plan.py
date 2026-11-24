from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .subscription_plan_commitment_interval import (
    SubscriptionPlanCommitmentInterval,
    SubscriptionPlanCommitmentIntervalDict,
)


class SubscriptionPlan(SdkBaseModel):
    """Plan details for a subscription, indicating whether it is a commitment or flexible plan."""

    commitment_interval: Optional[SubscriptionPlanCommitmentInterval] = Field(default=UNSET, alias="commitmentInterval")
    """The start and end dates of an annual commitment term."""

    is_commitment_plan: Optional[bool] = Field(default=UNSET, alias="isCommitmentPlan")
    """Whether this subscription is on an annual commitment plan (true) or a flexible plan (false)."""

    plan_name: Optional[str] = Field(default=UNSET, alias="planName")
    """The name of the plan, e.g. ANNUAL_MONTHLY_PAY, ANNUAL_YEARLY_PAY, FLEXIBLE, or TRIAL."""


class SubscriptionPlanDict(TypedDict):
    commitment_interval: NotRequired[SubscriptionPlanCommitmentIntervalDict]
    is_commitment_plan: NotRequired[bool]
    plan_name: NotRequired[str]
