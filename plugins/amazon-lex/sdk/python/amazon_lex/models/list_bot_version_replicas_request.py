from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bot_version_replica_sort_by import BotVersionReplicaSortBy, BotVersionReplicaSortByDict


class ListBotVersionReplicasRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The request for the unique ID in the list of replicated bots."""

    replica_region: str = Field(alias="replicaRegion")
    """The request for the region used in the list of replicated bots."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum results given in the list of replicated bots."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """The next token given in the list of replicated bots."""

    sort_by: Optional[BotVersionReplicaSortBy] = Field(default=UNSET, alias="sortBy")


class ListBotVersionReplicasRequestDict(TypedDict):
    bot_id: str
    replica_region: str
    max_results: NotRequired[int]
    next_token: NotRequired[str]
    sort_by: NotRequired[BotVersionReplicaSortByDict]
