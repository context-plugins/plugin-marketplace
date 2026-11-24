from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reason_dev_cycle_bucketing_open_feature_remote_evaluation_api import (
    ReasonDevCycleBucketingOpenFeatureRemoteEvaluationApiOrStr,
)


class OfrepEvaluationSuccess(SdkBaseModel):
    """Flag evaluation success response."""

    key: Optional[str] = UNSET
    """Feature flag key"""

    reason: Optional[ReasonDevCycleBucketingOpenFeatureRemoteEvaluationApiOrStr] = UNSET
    """An OpenFeature reason for the evaluation"""

    variant: Optional[str] = UNSET
    """Variant of the evaluated flag value"""

    metadata: Optional[Any] = UNSET
    """Arbitrary metadata supporting flag evaluation"""

    value: bool
    """Flag evaluation result"""


class OfrepEvaluationSuccessDict(TypedDict):
    key: NotRequired[str]
    reason: NotRequired[ReasonDevCycleBucketingOpenFeatureRemoteEvaluationApiOrStr]
    variant: NotRequired[str]
    metadata: NotRequired[Any]
    value: bool
