from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.log_format import LogFormatOrStr


class TelemetryConfig2(SdkBaseModel):
    """Optional. The configuration specifying telemetry settings for the Dataproc Metastore service. If unspecified
    defaults to JSON."""

    log_format: Optional[LogFormatOrStr] = Field(default=UNSET, alias="logFormat")
    """Optional. The output format of the Dataproc Metastore service's logs."""


class TelemetryConfig2Dict(TypedDict):
    log_format: NotRequired[LogFormatOrStr]
