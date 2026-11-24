from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .reseller_handshake_batch_summary import ResellerHandshakeBatchSummary, ResellerHandshakeBatchSummaryDict
from .reseller_handshake_result import ResellerHandshakeResult, ResellerHandshakeResultDict


class ResellerHandshakeBatchResult(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    dpma_id: str = Field(alias="dpmaId")
    results: list[ResellerHandshakeResult]
    summary: ResellerHandshakeBatchSummary
    """Per-outcome counts across the batch. Field names are snake_case, matching the actual wire format returned by this
    endpoint — an intentional inconsistency with the rest of the payload, which is camelCase."""


class ResellerHandshakeBatchResultDict(TypedDict):
    dpma_id: str
    results: list[ResellerHandshakeResultDict]
    summary: ResellerHandshakeBatchSummaryDict
