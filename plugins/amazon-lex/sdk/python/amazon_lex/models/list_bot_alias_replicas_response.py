from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bot_alias_replica_summary import BotAliasReplicaSummary, BotAliasReplicaSummaryDict


class ListBotAliasReplicasResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The unique bot ID of the replicated bot created from the source bot alias."""

    source_region: Optional[str] = Field(default=UNSET, alias="sourceRegion")
    """The source region of the replicated bot created from the source bot alias."""

    replica_region: Optional[str] = Field(default=UNSET, alias="replicaRegion")
    """The secondary region of the replicated bot created from the source bot alias."""

    bot_alias_replica_summaries: Optional[list[BotAliasReplicaSummary]] = Field(
        default=UNSET, alias="botAliasReplicaSummaries"
    )
    """The summary information of the replicated bot created from the source bot alias."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """The next token for the replicated bots created from the source bot alias."""


class ListBotAliasReplicasResponseDict(TypedDict):
    bot_id: NotRequired[str]
    source_region: NotRequired[str]
    replica_region: NotRequired[str]
    bot_alias_replica_summaries: NotRequired[list[BotAliasReplicaSummaryDict]]
    next_token: NotRequired[str]
