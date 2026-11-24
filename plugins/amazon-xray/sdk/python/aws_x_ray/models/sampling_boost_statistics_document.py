from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class SamplingBoostStatisticsDocument(SdkBaseModel):
    rule_name: str = Field(alias="RuleName")
    """The name of the sampling rule."""

    service_name: str = Field(alias="ServiceName")
    """Matches the name that the service uses to identify itself in segments."""

    timestamp: RFC3339DateTime = Field(alias="Timestamp")
    """The current time."""

    anomaly_count: int = Field(alias="AnomalyCount")
    """The number of requests with anomaly."""

    total_count: int = Field(alias="TotalCount")
    """The number of requests that associated to the rule."""

    sampled_anomaly_count: int = Field(alias="SampledAnomalyCount")
    """The number of requests with anomaly recorded."""


class SamplingBoostStatisticsDocumentDict(TypedDict):
    rule_name: str
    service_name: str
    timestamp: RFC3339DateTime
    anomaly_count: int
    total_count: int
    sampled_anomaly_count: int
