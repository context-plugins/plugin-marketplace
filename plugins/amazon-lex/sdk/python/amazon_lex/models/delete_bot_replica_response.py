from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.bot_replica_status1 import BotReplicaStatus1OrStr


class DeleteBotReplicaResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The unique bot ID of the replicated bot generated."""

    replica_region: Optional[str] = Field(default=UNSET, alias="replicaRegion")
    """The region of the replicated bot generated."""

    bot_replica_status: Optional[BotReplicaStatus1OrStr] = Field(default=UNSET, alias="botReplicaStatus")
    """The operational status of the replicated bot generated."""


class DeleteBotReplicaResponseDict(TypedDict):
    bot_id: NotRequired[str]
    replica_region: NotRequired[str]
    bot_replica_status: NotRequired[BotReplicaStatus1OrStr]
