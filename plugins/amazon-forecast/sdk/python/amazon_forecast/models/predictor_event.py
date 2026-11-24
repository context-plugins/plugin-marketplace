from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class PredictorEvent(SdkBaseModel):
    detail: Optional[str] = Field(default=UNSET, alias="Detail")
    """The type of event. For example, Retrain. A retraining event denotes the timepoint when a predictor was retrained.
    Any monitor results from before the Datetime are from the previous predictor. Any new metrics are for the newly
    retrained predictor."""

    datetime: Optional[RFC3339DateTime] = Field(default=UNSET, alias="Datetime")
    """The timestamp for when the event occurred."""


class PredictorEventDict(TypedDict):
    detail: NotRequired[str]
    datetime: NotRequired[RFC3339DateTime]
