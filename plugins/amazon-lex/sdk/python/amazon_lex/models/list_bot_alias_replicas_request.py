from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListBotAliasReplicasRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The request for the unique bot ID of the replicated bot created from the source bot alias."""

    replica_region: str = Field(alias="replicaRegion")
    """The request for the secondary region of the replicated bot created from the source bot alias."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The request for maximum results to list the replicated bots created from the source bot alias."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """The request for the next token for the replicated bot created from the source bot alias."""


class ListBotAliasReplicasRequestDict(TypedDict):
    bot_id: str
    replica_region: str
    max_results: NotRequired[int]
    next_token: NotRequired[str]
