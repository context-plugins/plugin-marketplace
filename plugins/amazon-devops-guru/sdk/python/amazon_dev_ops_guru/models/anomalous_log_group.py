from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .log_anomaly_showcase import LogAnomalyShowcase, LogAnomalyShowcaseDict


class AnomalousLogGroup(SdkBaseModel):
    log_group_name: Optional[str] = Field(default=UNSET, alias="LogGroupName")
    """The name of the CloudWatch log group."""

    impact_start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="ImpactStartTime")
    """The time the anomalous log events began. The impact start time indicates the time of the first log anomaly event
    that occurs."""

    impact_end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="ImpactEndTime")
    """The time the anomalous log events stopped."""

    number_of_log_lines_scanned: Optional[int] = Field(default=UNSET, alias="NumberOfLogLinesScanned")
    """The number of log lines that were scanned for anomalous log events."""

    log_anomaly_showcases: Optional[list[LogAnomalyShowcase]] = Field(default=UNSET, alias="LogAnomalyShowcases")
    """The log anomalies in the log group. Each log anomaly displayed represents a cluster of similar anomalous log
    events."""


class AnomalousLogGroupDict(TypedDict):
    log_group_name: NotRequired[str]
    impact_start_time: NotRequired[RFC3339DateTime]
    impact_end_time: NotRequired[RFC3339DateTime]
    number_of_log_lines_scanned: NotRequired[int]
    log_anomaly_showcases: NotRequired[list[LogAnomalyShowcaseDict]]
