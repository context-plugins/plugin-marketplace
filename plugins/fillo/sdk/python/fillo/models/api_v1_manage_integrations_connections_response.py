from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .account import Account, AccountDict
from .discord_server import DiscordServer, DiscordServerDict
from .selected import Selected, SelectedDict


class ApiV1ManageIntegrationsConnectionsResponse(SdkBaseModel):
    accounts: list[Account]
    selected: Selected
    """The account id this project uses for each provider, or null."""

    discord_servers: list[DiscordServer] = Field(alias="discordServers")
    removed_destinations: int = Field(alias="removedDestinations")
    """Form destinations pinned to the detached account that were removed from this project."""


class ApiV1ManageIntegrationsConnectionsResponseDict(TypedDict):
    accounts: list[AccountDict]
    selected: SelectedDict
    discord_servers: list[DiscordServerDict]
    removed_destinations: int
