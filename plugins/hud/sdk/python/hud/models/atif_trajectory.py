from __future__ import annotations

from typing import Any

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .atif_agent import AtifAgent, AtifAgentDict
from .atif_final_metrics import AtifFinalMetrics, AtifFinalMetricsDict
from .atif_step import AtifStep, AtifStepDict
from .enums.schema_version import SchemaVersion, SchemaVersionOrStr


class AtifTrajectory(SdkBaseModel):
    """ATIF v1.0-v1.8 document accepted by the public import endpoints."""

    model_config = ConfigDict(extra="forbid")

    schema_version: SchemaVersionOrStr = SchemaVersion.ATIF_V1_8
    session_id: Optional[str] = UNSET
    trajectory_id: Optional[str] = UNSET
    agent: AtifAgent
    steps: list[AtifStep]
    notes: Optional[str] = UNSET
    final_metrics: Optional[AtifFinalMetrics] = UNSET
    continued_trajectory_ref: Optional[str] = UNSET
    extra: Optional[Any] = UNSET
    subagent_trajectories: Optional[list[AtifTrajectory]] = UNSET


class AtifTrajectoryDict(TypedDict):
    schema_version: NotRequired[SchemaVersionOrStr]
    session_id: NotRequired[str]
    trajectory_id: NotRequired[str]
    agent: AtifAgentDict
    steps: list[AtifStepDict]
    notes: NotRequired[str]
    final_metrics: NotRequired[AtifFinalMetricsDict]
    continued_trajectory_ref: NotRequired[str]
    extra: NotRequired[Any]
    subagent_trajectories: NotRequired[list[AtifTrajectoryDict]]
