from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .quantiles import Quantiles, QuantilesDict


class ShuffleWriteQuantileMetrics(SdkBaseModel):
    write_time_nanos: Optional[Quantiles] = Field(default=UNSET, alias="writeTimeNanos")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    write_records: Optional[Quantiles] = Field(default=UNSET, alias="writeRecords")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    write_bytes: Optional[Quantiles] = Field(default=UNSET, alias="writeBytes")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""


class ShuffleWriteQuantileMetricsDict(TypedDict):
    write_time_nanos: NotRequired[QuantilesDict]
    write_records: NotRequired[QuantilesDict]
    write_bytes: NotRequired[QuantilesDict]
