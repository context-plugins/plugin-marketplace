from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.composer_provider import ComposerProviderOrStr


class ComposerRecipeResult(SdkBaseModel):
    """One result of a Composer recipe — a finding on one affected resource."""

    id: int
    """Result ID."""

    rule_id: int = Field(alias="ruleId")
    """ID of the recipe the result belongs to. Equal to the ``recipeId`` path parameter."""

    issued_resource_id: str = Field(alias="issuedResourceId")
    """Identifier of the affected resource, as stored by Composer."""

    provider_identifier: str | None = Field(alias="providerIdentifier")
    """Canonical cloud-provider identifier of the affected resource.
    - AWS: the resource's ARN when one is available, otherwise the stored identifier (for example, an EC2 instance ID).
    - Google Cloud: the API relative resource name (for example,
        ``projects/my-project/zones/us-central1-a/instances/vm-1``), or the bucket name for Cloud Storage; otherwise the
        stored identifier.
    - Other providers: the provider-native identifier.

    ``null`` when no identifier is stored or it could not be resolved; resolving it never fails the request."""

    tags: dict[str, str] | None
    """Cloud-provider tags on the affected resource, as key/value pairs. An empty object means the resource has no tags.
    ``null`` means the tags could not be resolved; resolving them never fails the request."""

    issued_resource_name: str = Field(alias="issuedResourceName")
    """Name of the affected resource."""

    account_id: str = Field(alias="accountId")
    """Cloud account the affected resource belongs to (for example, an AWS account ID or a Google Cloud project ID)."""

    region: Optional[str] = UNSET
    """Cloud region of the affected resource. Absent for global resources."""

    provider: ComposerProviderOrStr
    """Cloud provider or platform, using the Console's provider names."""

    resource_class: Optional[str] = Field(default=UNSET, alias="resourceClass")
    """Type of the affected resource. Absent when unknown."""

    detection_time: RFC3339DateTime = Field(alias="detectionTime")
    """When the result was first detected (RFC 3339, UTC)."""

    resolved_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="resolvedTime")
    """When the result was resolved (RFC 3339, UTC). Absent while unresolved."""

    solved: bool
    """Whether the result is resolved."""

    snoozed: Optional[bool] = UNSET
    """Whether the result is currently snoozed. Present only when ``true``; absent means not snoozed."""

    is_active: bool = Field(alias="isActive")
    """Whether the result's account was scanned recently. It does not say whether the result is resolved or snoozed; use
    ``solved`` and ``snoozed`` for that, or the ``status`` filter."""

    last_flow_id: Optional[str] = Field(default=UNSET, alias="lastFlowId")
    """ID of the most recent Composer scan that reported this result. Absent when unknown."""

    first_flow_id: Optional[str] = Field(default=UNSET, alias="firstFlowId")
    """ID of the Composer scan that first reported this result. Absent when unknown."""

    cost_estimation_potential_savings: Optional[float] = Field(default=UNSET, alias="costEstimationPotentialSavings")
    """Potential cost savings — the daily amount in US dollars you would stop paying by acting on this result. The
    Console **Cost savings** column is this daily US-dollar amount × 365, converted to your organization's currency.
    Absent when not estimated, and always absent on resolved results."""

    cost_estimation_potential_increased_costs: Optional[float] = Field(
        default=UNSET, alias="costEstimationPotentialIncreasedCosts"
    )
    """Cost avoidance — the daily amount in US dollars of a future charge (for example, extended-support fees) you
    prevent by acting on this result in time. The Console **Cost avoidance** column is this daily US-dollar amount ×
    365, converted to your organization's currency. Absent when not estimated, and always absent on resolved results."""

    cost_estimation_potential_freed_commitments: Optional[float] = Field(
        default=UNSET, alias="costEstimationPotentialFreedCommitments"
    )
    """Freed commitments — the daily amount in US dollars of commitment coverage (Savings Plans, Reserved Instances or
    CUDs) that acting on this result frees up for other usage. The Console **Freed commitments** column is this daily
    US-dollar amount × 365, converted to your organization's currency. Absent when not estimated, and always absent on
    resolved results."""

    cost_estimation_potential_increased_commitments_required: Optional[float] = Field(
        default=UNSET, alias="costEstimationPotentialIncreasedCommitmentsRequired"
    )
    """Avoidable commitments — the daily amount in US dollars of extra commitment or overlapping cost you avoid by
    timing the action, for example to a Reserved Instance's expiry. The Console **Avoidable commitments** column is this
    daily US-dollar amount × 365, converted to your organization's currency. Absent when not estimated, and always
    absent on resolved results."""


class ComposerRecipeResultDict(TypedDict):
    id: int
    rule_id: int
    issued_resource_id: str
    provider_identifier: str | None
    tags: dict[str, str] | None
    issued_resource_name: str
    account_id: str
    region: NotRequired[str]
    provider: ComposerProviderOrStr
    resource_class: NotRequired[str]
    detection_time: RFC3339DateTime
    resolved_time: NotRequired[RFC3339DateTime]
    solved: bool
    snoozed: NotRequired[bool]
    is_active: bool
    last_flow_id: NotRequired[str]
    first_flow_id: NotRequired[str]
    cost_estimation_potential_savings: NotRequired[float]
    cost_estimation_potential_increased_costs: NotRequired[float]
    cost_estimation_potential_freed_commitments: NotRequired[float]
    cost_estimation_potential_increased_commitments_required: NotRequired[float]
