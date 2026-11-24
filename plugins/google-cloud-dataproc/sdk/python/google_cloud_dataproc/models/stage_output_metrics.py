from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StageOutputMetrics(SdkBaseModel):
    """Metrics about the output written by the stage."""

    bytes_written: Optional[str] = Field(default=UNSET, alias="bytesWritten")
    records_written: Optional[str] = Field(default=UNSET, alias="recordsWritten")


class StageOutputMetricsDict(TypedDict):
    bytes_written: NotRequired[str]
    records_written: NotRequired[str]
