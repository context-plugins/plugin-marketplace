from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ListBotReplicasRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The request for the unique bot IDs in the list of replicated bots."""


class ListBotReplicasRequestDict(TypedDict):
    bot_id: str
