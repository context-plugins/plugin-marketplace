from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.cloud import CloudOrStr
from .enums.service_doi_t_perfect_scale_for_commitments_general_api import (
    ServiceDoiTPerfectScaleForCommitmentsGeneralApiOrStr,
)


class CommitmentPolicyAssignment(SdkBaseModel):
    """One account × product-line scope a policy is explicitly assigned to, on either cloud."""

    cloud: CloudOrStr
    """Cloud the scope belongs to."""

    account_id: str = Field(alias="accountId")
    """AWS management account id or GCP billing account id, matching ``managementAccountId`` / ``billingAccountId``
    elsewhere in this API."""

    service: ServiceDoiTPerfectScaleForCommitmentsGeneralApiOrStr
    """Product line the policy applies to. ``compute`` and ``database`` are AWS Savings Plan lines (GCP also has
    ``compute``); ``cloud_sql`` is GCP only."""

    region: str | None
    """Region scope in ``lower_snake_case`` wire form (for example ``us_east1``) for product lines assigned per region
    (GCP ``cloud_sql``). ``null`` for every scope assigned per account (all AWS scopes, GCP ``compute``); the settings
    endpoints report the same scope as ``global``."""


class CommitmentPolicyAssignmentDict(TypedDict):
    cloud: CloudOrStr
    account_id: str
    service: ServiceDoiTPerfectScaleForCommitmentsGeneralApiOrStr
    region: str | None
