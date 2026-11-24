from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.status1_doi_t_perfect_scale_for_commitments_aws_api import Status1DoiTPerfectScaleForCommitmentsAwsApiOrStr


class AwsOnboardingStatusEntry(SdkBaseModel):
    status: Status1DoiTPerfectScaleForCommitmentsAwsApiOrStr
    """Current onboarding lifecycle stage for this product line."""

    onboarding_started_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="onboardingStartedAt")
    """When PerfectScale for Commitments first began tracking commitments for this commitment type. Bounds lifetime
    savings totals and onboarding history in the DoiT Console. Omitted or null when onboarding has not started."""


class AwsOnboardingStatusEntryDict(TypedDict):
    status: Status1DoiTPerfectScaleForCommitmentsAwsApiOrStr
    onboarding_started_at: NotRequired[RFC3339DateTime | None]
