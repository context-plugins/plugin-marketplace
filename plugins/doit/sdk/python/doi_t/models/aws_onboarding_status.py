from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .aws_onboarding_status_entry import AwsOnboardingStatusEntry, AwsOnboardingStatusEntryDict


class AwsOnboardingStatus(SdkBaseModel):
    """PerfectScale for Commitments onboarding status for each commitment type on the AWS organization (``compute``,
    ``database``). A commitment type is omitted when it is not onboarded. When ``done``, inventory and recommendations
    for that commitment type are available."""

    compute: Optional[AwsOnboardingStatusEntry] = UNSET
    database: Optional[AwsOnboardingStatusEntry] = UNSET


class AwsOnboardingStatusDict(TypedDict):
    compute: NotRequired[AwsOnboardingStatusEntryDict]
    database: NotRequired[AwsOnboardingStatusEntryDict]
