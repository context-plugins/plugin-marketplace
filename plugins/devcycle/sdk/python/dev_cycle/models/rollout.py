from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.type_dev_cycle_management_deprecated_features_v1_api import (
    TypeDevCycleManagementDeprecatedFeaturesV1ApiOrStr,
)
from .rollout_stage import RolloutStage, RolloutStageDict


class Rollout(SdkBaseModel):
    start_percentage: Optional[float] = Field(default=UNSET, alias="startPercentage")
    """Rollout start percentage"""

    type_: TypeDevCycleManagementDeprecatedFeaturesV1ApiOrStr = Field(alias="type")
    """Type of rollout"""

    start_date: RFC3339DateTime = Field(alias="startDate")
    """Date to start rollout"""

    stages: Optional[list[RolloutStage]] = UNSET
    """Stages of rollout"""


class RolloutDict(TypedDict):
    start_percentage: NotRequired[float]
    type_: TypeDevCycleManagementDeprecatedFeaturesV1ApiOrStr
    start_date: RFC3339DateTime
    stages: NotRequired[list[RolloutStageDict]]
