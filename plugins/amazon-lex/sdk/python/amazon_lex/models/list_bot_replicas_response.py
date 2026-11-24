from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bot_replica_summary import BotReplicaSummary, BotReplicaSummaryDict


class ListBotReplicasResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """the unique bot IDs in the list of replicated bots."""

    source_region: Optional[str] = Field(default=UNSET, alias="sourceRegion")
    """The source region of the source bots in the list of replicated bots."""

    bot_replica_summaries: Optional[list[BotReplicaSummary]] = Field(default=UNSET, alias="botReplicaSummaries")
    """The summary details for the replicated bots."""


class ListBotReplicasResponseDict(TypedDict):
    bot_id: NotRequired[str]
    source_region: NotRequired[str]
    bot_replica_summaries: NotRequired[list[BotReplicaSummaryDict]]
