from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CreateBotReplicaRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The request for the unique bot ID of the source bot to be replicated in the secondary region."""

    replica_region: str = Field(alias="replicaRegion")
    """The request for the secondary region that will be used in the replication of the source bot."""


class CreateBotReplicaRequestDict(TypedDict):
    bot_id: str
    replica_region: str
