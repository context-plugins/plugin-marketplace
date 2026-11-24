from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StackdriverLoggingConfig(SdkBaseModel):
    """Configuration options for writing logs to `Stackdriver Logging <https://cloud.google.com/logging/docs/>`__."""

    sampling_ratio: Optional[float] = Field(default=UNSET, alias="samplingRatio")
    """Specifies the fraction of operations to write to `Stackdriver Logging
    <https://cloud.google.com/logging/docs/>`__. This field may contain any value between 0.0 and 1.0, inclusive. 0.0 is
    the default and means that no operations are logged."""


class StackdriverLoggingConfigDict(TypedDict):
    sampling_ratio: NotRequired[float]
