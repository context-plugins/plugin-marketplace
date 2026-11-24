from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .quantiles import Quantiles, QuantilesDict


class InputQuantileMetrics(SdkBaseModel):
    bytes_read: Optional[Quantiles] = Field(default=UNSET, alias="bytesRead")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    records_read: Optional[Quantiles] = Field(default=UNSET, alias="recordsRead")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""


class InputQuantileMetricsDict(TypedDict):
    bytes_read: NotRequired[QuantilesDict]
    records_read: NotRequired[QuantilesDict]
