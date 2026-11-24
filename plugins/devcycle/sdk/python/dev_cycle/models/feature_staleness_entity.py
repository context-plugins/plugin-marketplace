from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.reason_dev_cycle_management_features_v2_api import ReasonDevCycleManagementFeaturesV2ApiOrStr


class FeatureStalenessEntity(SdkBaseModel):
    key: str
    """Feature key"""

    name: str
    """Feature name"""

    feature: str = Field(alias="_feature")
    """Feature ID"""

    stale: bool
    """Staleness status"""

    updated_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")
    """Last updated at"""

    disabled: bool
    """If the Feature's staleness is disabled"""

    snoozed_until: Optional[RFC3339DateTime] = Field(default=UNSET, alias="snoozedUntil")
    """Snooze staleness until date specified"""

    reason: Optional[ReasonDevCycleManagementFeaturesV2ApiOrStr] = UNSET
    """Reason for staleness"""

    meta_data: Optional[Any] = Field(default=UNSET, alias="metaData")
    """Miscellaneous metadata"""


class FeatureStalenessEntityDict(TypedDict):
    key: str
    name: str
    feature: str
    stale: bool
    updated_at: NotRequired[RFC3339DateTime]
    disabled: bool
    snoozed_until: NotRequired[RFC3339DateTime]
    reason: NotRequired[ReasonDevCycleManagementFeaturesV2ApiOrStr]
    meta_data: NotRequired[Any]
