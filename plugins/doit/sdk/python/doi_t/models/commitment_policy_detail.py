from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .commitment_policy_assignment import CommitmentPolicyAssignment, CommitmentPolicyAssignmentDict


class CommitmentPolicyDetail(SdkBaseModel):
    id: str
    """Policy identifier. Built-in policies use the fixed ids ``conservative``, ``balanced`` and ``max_savings``; custom
    policies have an opaque id."""

    name: str
    """Display name. Built-in names are fixed; custom names are chosen by the tenant."""

    is_built_in: bool = Field(alias="isBuiltIn")
    """``true`` for the three immutable built-in policies, ``false`` for tenant-defined policies."""

    target_coverage: float = Field(alias="targetCoverage")
    """Share of the optimal commitment the engine aims to purchase, as a percentage."""

    lookback_days: int = Field(alias="lookbackDays")
    """Days of historical usage analyzed to build the recommendation baseline."""

    ladder_step_percent: float = Field(alias="ladderStepPercent")
    """Size of each incremental laddering step, as a percentage of the target commitment."""

    ladder_interval_days: int = Field(alias="ladderIntervalDays")
    """Days between consecutive laddering steps."""

    bootstrap_percent: float = Field(alias="bootstrapPercent")
    """Share of the target commitment purchased in the first (immediate) step, as a percentage."""

    created_time: RFC3339DateTime | None = Field(alias="createdTime")
    """When the policy was created, RFC 3339 UTC. ``null`` if unknown."""

    updated_time: RFC3339DateTime | None = Field(alias="updatedTime")
    """When the policy was last written, RFC 3339 UTC. For custom policies this is the last edit; for built-in policies
    it also advances when DoiT re-publishes the catalog, even if the parameters did not change. ``null`` if unknown."""

    assignments: list[CommitmentPolicyAssignment]
    """Scopes explicitly assigned to this policy across AWS and GCP, sorted by ``cloud``, ``accountId``, ``service``,
    ``region``. Empty when the policy is not assigned anywhere."""


class CommitmentPolicyDetailDict(TypedDict):
    id: str
    name: str
    is_built_in: bool
    target_coverage: float
    lookback_days: int
    ladder_step_percent: float
    ladder_interval_days: int
    bootstrap_percent: float
    created_time: RFC3339DateTime | None
    updated_time: RFC3339DateTime | None
    assignments: list[CommitmentPolicyAssignmentDict]
