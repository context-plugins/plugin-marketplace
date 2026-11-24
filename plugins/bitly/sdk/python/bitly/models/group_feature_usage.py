from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .group_consumable_feature_usage import GroupConsumableFeatureUsage, GroupConsumableFeatureUsageDict


class GroupFeatureUsage(SdkBaseModel):
    group_guid: str
    """the group's guid"""

    limit_usage: list[GroupConsumableFeatureUsage]
    """an array of all of the group's consumable feature usage"""


class GroupFeatureUsageDict(TypedDict):
    group_guid: str
    limit_usage: list[GroupConsumableFeatureUsageDict]
