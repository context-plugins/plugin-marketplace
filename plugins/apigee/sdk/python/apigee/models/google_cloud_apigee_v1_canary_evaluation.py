from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state5 import State5OrStr
from .enums.verdict import VerdictOrStr
from .google_cloud_apigee_v1_canary_evaluation_metric_labels2 import (
    GoogleCloudApigeeV1CanaryEvaluationMetricLabels2,
    GoogleCloudApigeeV1CanaryEvaluationMetricLabels2Dict,
)


class GoogleCloudApigeeV1CanaryEvaluation(SdkBaseModel):
    """CanaryEvaluation represents the canary analysis between two versions of the runtime that is serving requests."""

    end_time: Optional[str] = Field(default=UNSET, alias="endTime")
    """Required. End time for the evaluation's analysis."""

    metric_labels: Optional[GoogleCloudApigeeV1CanaryEvaluationMetricLabels2] = Field(
        default=UNSET, alias="metricLabels"
    )
    """Required. Labels used to filter the metrics used for a canary evaluation."""

    verdict: Optional[VerdictOrStr] = UNSET
    """Output only. The resulting verdict of the canary evaluations: NONE, PASS, or FAIL."""

    state: Optional[State5OrStr] = UNSET
    """Output only. The current state of the canary evaluation."""

    treatment: Optional[str] = UNSET
    """Required. The newer version that is serving requests."""

    name: Optional[str] = UNSET
    """Output only. Name of the canary evalution."""

    control: Optional[str] = UNSET
    """Required. The stable version that is serving requests."""

    start_time: Optional[str] = Field(default=UNSET, alias="startTime")
    """Required. Start time for the canary evaluation's analysis."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. Create time of the canary evaluation."""


class GoogleCloudApigeeV1CanaryEvaluationDict(TypedDict):
    end_time: NotRequired[str]
    metric_labels: NotRequired[GoogleCloudApigeeV1CanaryEvaluationMetricLabels2Dict]
    verdict: NotRequired[VerdictOrStr]
    state: NotRequired[State5OrStr]
    treatment: NotRequired[str]
    name: NotRequired[str]
    control: NotRequired[str]
    start_time: NotRequired[str]
    create_time: NotRequired[str]
