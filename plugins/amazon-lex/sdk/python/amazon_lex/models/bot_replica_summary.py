from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.bot_replica_status import BotReplicaStatusOrStr


class BotReplicaSummary(SdkBaseModel):
    replica_region: Optional[str] = Field(default=UNSET, alias="replicaRegion")
    """The replica region used in the replication statuses summary."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The creation time and date for the replicated bots."""

    bot_replica_status: Optional[BotReplicaStatusOrStr] = Field(default=UNSET, alias="botReplicaStatus")
    """The operation status for the replicated bot applicable."""

    failure_reasons: Optional[list[str]] = Field(default=UNSET, alias="failureReasons")
    """The reasons for the failure for the replicated bot."""


class BotReplicaSummaryDict(TypedDict):
    replica_region: NotRequired[str]
    creation_date_time: NotRequired[RFC3339DateTime]
    bot_replica_status: NotRequired[BotReplicaStatusOrStr]
    failure_reasons: NotRequired[list[str]]
