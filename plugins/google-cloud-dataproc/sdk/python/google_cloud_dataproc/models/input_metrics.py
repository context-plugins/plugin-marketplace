from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InputMetrics(SdkBaseModel):
    """Metrics about the input data read by the task."""

    records_read: Optional[str] = Field(default=UNSET, alias="recordsRead")
    bytes_read: Optional[str] = Field(default=UNSET, alias="bytesRead")


class InputMetricsDict(TypedDict):
    records_read: NotRequired[str]
    bytes_read: NotRequired[str]
