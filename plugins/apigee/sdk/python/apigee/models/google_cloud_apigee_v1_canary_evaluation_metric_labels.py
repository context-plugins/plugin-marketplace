from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1CanaryEvaluationMetricLabels(SdkBaseModel):
    """Labels that can be used to filter Apigee metrics."""

    env: Optional[str] = UNSET
    """The environment ID associated with the metrics."""

    instance_id: Optional[str] = UNSET
    """Required. The instance ID associated with the metrics. In Apigee Hybrid, the value is configured during
    installation."""

    location: Optional[str] = UNSET
    """Required. The location associated with the metrics."""


class GoogleCloudApigeeV1CanaryEvaluationMetricLabelsDict(TypedDict):
    env: NotRequired[str]
    instance_id: NotRequired[str]
    location: NotRequired[str]
