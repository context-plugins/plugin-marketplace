from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ManageIntegrationsDiscordAccountsRequest(SdkBaseModel):
    label: str
    """An empty string clears the name."""


class ApiV1ManageIntegrationsDiscordAccountsRequestDict(TypedDict):
    label: str
