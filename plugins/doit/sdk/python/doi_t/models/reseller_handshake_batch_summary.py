from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ResellerHandshakeBatchSummary(SdkBaseModel):
    """Per-outcome counts across the batch. Field names are snake_case, matching the actual wire format returned by this
    endpoint — an intentional inconsistency with the rest of the payload, which is camelCase."""

    model_config = ConfigDict(extra="forbid")

    handshake_issued: int
    no_op: int
    mapped: int
    remapped: int
    failed: int


class ResellerHandshakeBatchSummaryDict(TypedDict):
    handshake_issued: int
    no_op: int
    mapped: int
    remapped: int
    failed: int
