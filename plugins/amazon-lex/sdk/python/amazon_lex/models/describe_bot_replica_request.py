from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeBotReplicaRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The request for the unique bot ID of the replicated bot being monitored."""

    replica_region: str = Field(alias="replicaRegion")
    """The request for the region of the replicated bot being monitored."""


class DescribeBotReplicaRequestDict(TypedDict):
    bot_id: str
    replica_region: str
