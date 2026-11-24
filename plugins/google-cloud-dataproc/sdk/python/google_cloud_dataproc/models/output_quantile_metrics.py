from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .quantiles import Quantiles, QuantilesDict


class OutputQuantileMetrics(SdkBaseModel):
    records_written: Optional[Quantiles] = Field(default=UNSET, alias="recordsWritten")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    bytes_written: Optional[Quantiles] = Field(default=UNSET, alias="bytesWritten")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""


class OutputQuantileMetricsDict(TypedDict):
    records_written: NotRequired[QuantilesDict]
    bytes_written: NotRequired[QuantilesDict]
