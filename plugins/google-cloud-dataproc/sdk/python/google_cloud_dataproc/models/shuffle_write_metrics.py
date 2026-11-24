from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ShuffleWriteMetrics(SdkBaseModel):
    """Shuffle data written by task."""

    write_time_nanos: Optional[str] = Field(default=UNSET, alias="writeTimeNanos")
    bytes_written: Optional[str] = Field(default=UNSET, alias="bytesWritten")
    records_written: Optional[str] = Field(default=UNSET, alias="recordsWritten")


class ShuffleWriteMetricsDict(TypedDict):
    write_time_nanos: NotRequired[str]
    bytes_written: NotRequired[str]
    records_written: NotRequired[str]
