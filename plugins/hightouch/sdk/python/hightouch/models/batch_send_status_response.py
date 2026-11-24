from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .batch_send_status_result import BatchSendStatusResult, BatchSendStatusResultDict


class BatchSendStatusResponse(SdkBaseModel):
    """Response body for the batch send status endpoint. Results are returned in the same order as the requested
    ``sendIds``."""

    model_config = ConfigDict(extra="forbid")

    results: list[BatchSendStatusResult]
    """Per-send outcomes, in request order."""


class BatchSendStatusResponseDict(TypedDict):
    results: list[BatchSendStatusResultDict]
