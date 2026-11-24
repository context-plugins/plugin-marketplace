from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteBotReplicaRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The unique ID of the replicated bot to be deleted from the secondary region"""

    replica_region: str = Field(alias="replicaRegion")
    """The secondary region of the replicated bot that will be deleted."""


class DeleteBotReplicaRequestDict(TypedDict):
    bot_id: str
    replica_region: str
