from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.operator import OperatorOrStr
from .unions.filter_dev_cycle_management_deprecated_features_v1_api import (
    FilterDevCycleManagementDeprecatedFeaturesV1Api,
    FilterDevCycleManagementDeprecatedFeaturesV1ApiDict,
)


class AudienceOperatorWithAudienceMatchFilter(SdkBaseModel):
    filters: list[FilterDevCycleManagementDeprecatedFeaturesV1Api]
    """Filters to apply using the "operator" operation"""

    operator: OperatorOrStr
    """Operator type if this object represents an operator, and not a filter"""


class AudienceOperatorWithAudienceMatchFilterDict(TypedDict):
    filters: list[FilterDevCycleManagementDeprecatedFeaturesV1ApiDict]
    operator: OperatorOrStr
