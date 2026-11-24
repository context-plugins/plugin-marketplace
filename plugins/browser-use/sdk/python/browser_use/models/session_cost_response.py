from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SessionCostResponse(SdkBaseModel):
    """Everything a session cost, split by what it was spent on.

    Recorded usage, not an invoice total — promotional waivers and credits are applied downstream in billing.

    Browser time and proxy bandwidth are metered against the session's browser, which outlives any single run, so they
    have no per-run number — only ``RunSummary.total_cost_usd``, the LLM (and web search) charge, does.

    All amounts are fixed-6-decimal strings for the same reason as ``RunSummary.total_cost_usd``: JS clients lose
    precision on float."""

    session_id: UUID = Field(alias="sessionId")
    num_runs: int = Field(alias="numRuns")
    llm_cost_usd: str = Field(alias="llmCostUsd")
    search_cost_usd: str = Field(alias="searchCostUsd")
    browser_cost_usd: str = Field(alias="browserCostUsd")
    proxy_cost_usd: str = Field(alias="proxyCostUsd")
    proxy_used_mb: str = Field(alias="proxyUsedMb")
    total_cost_usd: str = Field(alias="totalCostUsd")


class SessionCostResponseDict(TypedDict):
    session_id: UUID
    num_runs: int
    llm_cost_usd: str
    search_cost_usd: str
    browser_cost_usd: str
    proxy_cost_usd: str
    proxy_used_mb: str
    total_cost_usd: str
