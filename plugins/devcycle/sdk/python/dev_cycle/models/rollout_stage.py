from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.type1_dev_cycle_management_deprecated_features_v1_api import (
    Type1DevCycleManagementDeprecatedFeaturesV1ApiOrStr,
)


class RolloutStage(SdkBaseModel):
    percentage: float
    """Target percentage to reach by the step date"""

    type_: Type1DevCycleManagementDeprecatedFeaturesV1ApiOrStr = Field(alias="type")
    """Defines the transition into this percentage level"""

    date: RFC3339DateTime
    """Date the target percentage should be fully applied"""


class RolloutStageDict(TypedDict):
    percentage: float
    type_: Type1DevCycleManagementDeprecatedFeaturesV1ApiOrStr
    date: RFC3339DateTime
