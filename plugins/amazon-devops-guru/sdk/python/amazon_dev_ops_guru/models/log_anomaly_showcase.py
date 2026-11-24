from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .log_anomaly_class import LogAnomalyClass, LogAnomalyClassDict


class LogAnomalyShowcase(SdkBaseModel):
    log_anomaly_classes: Optional[list[LogAnomalyClass]] = Field(default=UNSET, alias="LogAnomalyClasses")
    """A list of anomalous log events that may be related."""


class LogAnomalyShowcaseDict(TypedDict):
    log_anomaly_classes: NotRequired[list[LogAnomalyClassDict]]
