from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CommitmentPolicy(SdkBaseModel):
    """A commitment-laddering policy, either built-in or defined by the tenant. Percentages are ``1``–``100``, as
    entered in the DoiT Console, not the 0–1 fractions used by the recommendation and inventory coverage fields."""

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


class CommitmentPolicyDict(TypedDict):
    id: str
    name: str
    is_built_in: bool
    target_coverage: float
    lookback_days: int
    ladder_step_percent: float
    ladder_interval_days: int
    bootstrap_percent: float
