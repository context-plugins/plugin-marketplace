from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.bot_replica_status3 import BotReplicaStatus3OrStr


class DescribeBotReplicaResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The unique bot ID of the replicated bot being monitored."""

    replica_region: Optional[str] = Field(default=UNSET, alias="replicaRegion")
    """The region of the replicated bot being monitored."""

    source_region: Optional[str] = Field(default=UNSET, alias="sourceRegion")
    """The source region of the replicated bot being monitored."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The creation date and time of the replicated bot being monitored."""

    bot_replica_status: Optional[BotReplicaStatus3OrStr] = Field(default=UNSET, alias="botReplicaStatus")
    """The operational status of the replicated bot being monitored."""

    failure_reasons: Optional[list[str]] = Field(default=UNSET, alias="failureReasons")
    """The failure reasons the bot being monitored failed to replicate."""


class DescribeBotReplicaResponseDict(TypedDict):
    bot_id: NotRequired[str]
    replica_region: NotRequired[str]
    source_region: NotRequired[str]
    creation_date_time: NotRequired[RFC3339DateTime]
    bot_replica_status: NotRequired[BotReplicaStatus3OrStr]
    failure_reasons: NotRequired[list[str]]
