from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cdc_strategy2 import CdcStrategy2, CdcStrategy2Dict


class RunStreamRequest(SdkBaseModel):
    """Request message for running a stream."""

    cdc_strategy: Optional[CdcStrategy2] = Field(default=UNSET, alias="cdcStrategy")
    """Optional. The CDC strategy of the stream. If not set, the system's default value will be used."""

    force: Optional[bool] = UNSET
    """Optional. Update the stream without validating it."""


class RunStreamRequestDict(TypedDict):
    cdc_strategy: NotRequired[CdcStrategy2Dict]
    force: NotRequired[bool]
