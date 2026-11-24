from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .account import Account, AccountDict
from .discord_server import DiscordServer, DiscordServerDict
from .selected import Selected, SelectedDict


class IntegrationConnections(SdkBaseModel):
    accounts: list[Account]
    selected: Selected
    """The account id this project uses for each provider, or null."""

    discord_servers: list[DiscordServer] = Field(alias="discordServers")


class IntegrationConnectionsDict(TypedDict):
    accounts: list[AccountDict]
    selected: SelectedDict
    discord_servers: list[DiscordServerDict]
