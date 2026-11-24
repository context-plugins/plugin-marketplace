from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.log_anomaly_type import LogAnomalyTypeOrStr


class LogAnomalyClass(SdkBaseModel):
    log_stream_name: Optional[str] = Field(default=UNSET, alias="LogStreamName")
    """The name of the Amazon CloudWatch log stream that the anomalous log event belongs to. A log stream is a sequence
    of log events that share the same source."""

    log_anomaly_type: Optional[LogAnomalyTypeOrStr] = Field(default=UNSET, alias="LogAnomalyType")
    """The type of log anomaly that has been detected."""

    log_anomaly_token: Optional[str] = Field(default=UNSET, alias="LogAnomalyToken")
    """The token where the anomaly was detected. This may refer to an exception or another location, or it may be blank
    for log anomalies such as format anomalies."""

    log_event_id: Optional[str] = Field(default=UNSET, alias="LogEventId")
    """The ID of the log event."""

    explanation: Optional[str] = Field(default=UNSET, alias="Explanation")
    """The explanation for why the log event is considered an anomaly."""

    number_of_log_lines_occurrences: Optional[int] = Field(default=UNSET, alias="NumberOfLogLinesOccurrences")
    """The number of log lines where this anomalous log event occurs."""

    log_event_timestamp: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LogEventTimestamp")
    """The time of the first occurrence of the anomalous log event."""


class LogAnomalyClassDict(TypedDict):
    log_stream_name: NotRequired[str]
    log_anomaly_type: NotRequired[LogAnomalyTypeOrStr]
    log_anomaly_token: NotRequired[str]
    log_event_id: NotRequired[str]
    explanation: NotRequired[str]
    number_of_log_lines_occurrences: NotRequired[int]
    log_event_timestamp: NotRequired[RFC3339DateTime]
