from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StageShuffleWriteMetrics(SdkBaseModel):
    """Shuffle data written for the stage."""

    bytes_written: Optional[str] = Field(default=UNSET, alias="bytesWritten")
    write_time_nanos: Optional[str] = Field(default=UNSET, alias="writeTimeNanos")
    records_written: Optional[str] = Field(default=UNSET, alias="recordsWritten")


class StageShuffleWriteMetricsDict(TypedDict):
    bytes_written: NotRequired[str]
    write_time_nanos: NotRequired[str]
    records_written: NotRequired[str]
