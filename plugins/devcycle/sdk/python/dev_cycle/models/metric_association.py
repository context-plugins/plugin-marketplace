from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .feature_dev_cycle_management_metric_associations_api import (
    FeatureDevCycleManagementMetricAssociationsApi,
    FeatureDevCycleManagementMetricAssociationsApiDict,
)
from .metric import Metric, MetricDict


class MetricAssociation(SdkBaseModel):
    project: str = Field(alias="_project")
    feature: FeatureDevCycleManagementMetricAssociationsApi
    metric: Metric
    created_at: RFC3339DateTime = Field(alias="createdAt")


class MetricAssociationDict(TypedDict):
    project: str
    feature: FeatureDevCycleManagementMetricAssociationsApiDict
    metric: MetricDict
    created_at: RFC3339DateTime
