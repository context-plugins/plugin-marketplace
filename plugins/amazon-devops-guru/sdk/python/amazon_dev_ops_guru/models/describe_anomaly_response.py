from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .proactive_anomaly import ProactiveAnomaly, ProactiveAnomalyDict
from .reactive_anomaly import ReactiveAnomaly, ReactiveAnomalyDict


class DescribeAnomalyResponse(SdkBaseModel):
    proactive_anomaly: Optional[ProactiveAnomaly] = Field(default=UNSET, alias="ProactiveAnomaly")
    reactive_anomaly: Optional[ReactiveAnomaly] = Field(default=UNSET, alias="ReactiveAnomaly")


class DescribeAnomalyResponseDict(TypedDict):
    proactive_anomaly: NotRequired[ProactiveAnomalyDict]
    reactive_anomaly: NotRequired[ReactiveAnomalyDict]
