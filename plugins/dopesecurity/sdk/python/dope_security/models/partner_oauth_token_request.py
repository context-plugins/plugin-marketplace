from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PartnerOauthTokenRequest(SdkBaseModel):
    grant_type: Literal["client_credentials"] = "client_credentials"
    """The type of grant requested. You must set this to ``client_credentials``"""

    client_id: str
    """Your application's Client ID."""

    client_secret: str
    """Your application's Client Secret."""


class PartnerOauthTokenRequestDict(TypedDict):
    grant_type: Literal["client_credentials"]
    client_id: str
    client_secret: str
