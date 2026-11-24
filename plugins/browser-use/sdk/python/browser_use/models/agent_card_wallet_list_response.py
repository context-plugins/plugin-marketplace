from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .agent_card_wallet_summary import AgentCardWalletSummary, AgentCardWalletSummaryDict


class AgentCardWalletListResponse(SdkBaseModel):
    wallets: list[AgentCardWalletSummary]


class AgentCardWalletListResponseDict(TypedDict):
    wallets: list[AgentCardWalletSummaryDict]
