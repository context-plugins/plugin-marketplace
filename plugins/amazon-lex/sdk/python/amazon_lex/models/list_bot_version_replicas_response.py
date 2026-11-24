from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bot_version_replica_summary import BotVersionReplicaSummary, BotVersionReplicaSummaryDict


class ListBotVersionReplicasResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The unique ID of the bots in the list of replicated bots."""

    source_region: Optional[str] = Field(default=UNSET, alias="sourceRegion")
    """The source region used for the bots in the list of replicated bots."""

    replica_region: Optional[str] = Field(default=UNSET, alias="replicaRegion")
    """The region used for the replicated bots in the list of replicated bots."""

    bot_version_replica_summaries: Optional[list[BotVersionReplicaSummary]] = Field(
        default=UNSET, alias="botVersionReplicaSummaries"
    )
    """The information summary used for the replicated bots in the list of replicated bots."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """The next token used for the replicated bots in the list of replicated bots."""


class ListBotVersionReplicasResponseDict(TypedDict):
    bot_id: NotRequired[str]
    source_region: NotRequired[str]
    replica_region: NotRequired[str]
    bot_version_replica_summaries: NotRequired[list[BotVersionReplicaSummaryDict]]
    next_token: NotRequired[str]
