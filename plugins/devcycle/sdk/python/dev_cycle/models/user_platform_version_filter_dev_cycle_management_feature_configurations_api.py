from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.comparator_dev_cycle_management_feature_configurations_api import (
    ComparatorDevCycleManagementFeatureConfigurationsApiOrStr,
)


class UserPlatformVersionFilterDevCycleManagementFeatureConfigurationsApi(SdkBaseModel):
    comparator: ComparatorDevCycleManagementFeatureConfigurationsApiOrStr
    """Comparator to use"""

    values: Optional[list[str]] = UNSET
    """An array of values is required for all filters except when the comparator is 'exist' or '!exist'"""

    type_: Literal["user"] = Field(default="user", alias="type")
    """Filter type of this audience"""

    sub_type: Literal["appVersion"] = Field(default="appVersion", alias="subType")
    """Sub type of this filter"""


class UserPlatformVersionFilterDevCycleManagementFeatureConfigurationsApiDict(TypedDict):
    comparator: ComparatorDevCycleManagementFeatureConfigurationsApiOrStr
    values: NotRequired[list[str]]
    type_: Literal["user"]
    sub_type: Literal["appVersion"]
