from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ModelCapacity(SdkBaseModel):
    """Hosted rollout capacity of a catalog model's scheduler group, from the last pass.

    Models in one scheduler group report the same values."""

    paused: bool
    """No new hosted rollouts start on the model."""

    current_rollouts: int
    """Hosted rollouts currently holding this model group's pooled capacity."""

    effective_max_rollouts: int
    """Current rollouts plus the additional pooled rollouts the last scheduler pass allowed after model, provider, and
    quota gates. Null when that pass did not plan the group because it had no queued or scheduler-launched rollouts."""

    utilization: float
    """Current rollouts divided by effective max rollouts; 0 with none running."""


class ModelCapacityDict(TypedDict):
    paused: bool
    current_rollouts: int
    effective_max_rollouts: int
    utilization: float
