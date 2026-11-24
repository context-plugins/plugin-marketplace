from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GroupConsumableFeatureUsage(SdkBaseModel):
    name: Optional[str] = UNSET
    description: Optional[str] = UNSET
    count: Optional[int] = UNSET


class GroupConsumableFeatureUsageDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    count: NotRequired[int]
