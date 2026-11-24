from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.bot_replica_status1 import BotReplicaStatus1OrStr


class CreateBotReplicaResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The unique bot ID of the replicated bot generated."""

    replica_region: Optional[str] = Field(default=UNSET, alias="replicaRegion")
    """The region of the replicated bot generated."""

    source_region: Optional[str] = Field(default=UNSET, alias="sourceRegion")
    """The source region for the source bot used for the replicated bot generated."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """The creation date and time of the replicated bot generated."""

    bot_replica_status: Optional[BotReplicaStatus1OrStr] = Field(default=UNSET, alias="botReplicaStatus")
    """The operational status of the replicated bot generated."""


class CreateBotReplicaResponseDict(TypedDict):
    bot_id: NotRequired[str]
    replica_region: NotRequired[str]
    source_region: NotRequired[str]
    creation_date_time: NotRequired[RFC3339DateTime]
    bot_replica_status: NotRequired[BotReplicaStatus1OrStr]
