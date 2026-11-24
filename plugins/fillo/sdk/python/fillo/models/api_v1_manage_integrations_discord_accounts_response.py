from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ManageIntegrationsDiscordAccountsResponse(SdkBaseModel):
    id: str
    label: str


class ApiV1ManageIntegrationsDiscordAccountsResponseDict(TypedDict):
    id: str
    label: str
