from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DiscordServer(SdkBaseModel):
    id: str
    guild_id: str = Field(alias="guildId")
    name: str | None


class DiscordServerDict(TypedDict):
    id: str
    guild_id: str
    name: str | None
