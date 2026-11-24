from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ManageIntegrationsDiscordServersResponse(SdkBaseModel):
    disconnected: Literal["True"] = "True"
    guild_id: str = Field(alias="guildId")
    name: str | None


class ApiV1ManageIntegrationsDiscordServersResponseDict(TypedDict):
    disconnected: Literal["True"]
    guild_id: str
    name: str | None
