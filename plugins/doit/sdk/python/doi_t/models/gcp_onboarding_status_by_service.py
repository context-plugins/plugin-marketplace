from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.service1_doi_t_perfect_scale_for_commitments_gcp_api import (
    Service1DoiTPerfectScaleForCommitmentsGcpApiOrStr,
)
from .enums.status_doi_t_perfect_scale_for_commitments_gcp_api import StatusDoiTPerfectScaleForCommitmentsGcpApiOrStr


class GcpOnboardingStatusByService(SdkBaseModel):
    """Onboarding status entry for one product line. When ``done``, inventory and recommendations for that commitment
    type are available."""

    status: StatusDoiTPerfectScaleForCommitmentsGcpApiOrStr
    """Current onboarding lifecycle stage for this product line."""

    onboarding_started_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="onboardingStartedAt")
    """When PerfectScale for Commitments first began tracking commitments for this commitment type. Bounds lifetime
    savings totals and onboarding history in the DoiT Console. Omitted or null when onboarding has not started."""

    service: Service1DoiTPerfectScaleForCommitmentsGcpApiOrStr
    """Product line this onboarding status belongs to."""


class GcpOnboardingStatusByServiceDict(TypedDict):
    status: StatusDoiTPerfectScaleForCommitmentsGcpApiOrStr
    onboarding_started_at: NotRequired[RFC3339DateTime | None]
    service: Service1DoiTPerfectScaleForCommitmentsGcpApiOrStr
