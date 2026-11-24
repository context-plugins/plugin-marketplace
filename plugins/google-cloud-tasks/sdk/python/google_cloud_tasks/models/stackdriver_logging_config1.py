from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StackdriverLoggingConfig1(SdkBaseModel):
    """Configuration options for writing logs to `Stackdriver Logging <https://cloud.google.com/logging/docs/>`__. If
    this field is unset, then no logs are written."""

    sampling_ratio: Optional[float] = Field(default=UNSET, alias="samplingRatio")
    """Specifies the fraction of operations to write to `Stackdriver Logging
    <https://cloud.google.com/logging/docs/>`__. This field may contain any value between 0.0 and 1.0, inclusive. 0.0 is
    the default and means that no operations are logged."""


class StackdriverLoggingConfig1Dict(TypedDict):
    sampling_ratio: NotRequired[float]
