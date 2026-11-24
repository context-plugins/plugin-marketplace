from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StageInputMetrics(SdkBaseModel):
    """Metrics about the input read by the stage."""

    bytes_read: Optional[str] = Field(default=UNSET, alias="bytesRead")
    records_read: Optional[str] = Field(default=UNSET, alias="recordsRead")


class StageInputMetricsDict(TypedDict):
    bytes_read: NotRequired[str]
    records_read: NotRequired[str]
