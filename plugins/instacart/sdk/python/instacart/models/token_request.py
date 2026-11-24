from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TokenRequest(SdkBaseModel):
    grant_type: Literal["client_credentials"] = "client_credentials"
    """The OAuth 2.0 grant type. Must be client_credentials."""

    client_id: str
    """The client ID provided by Instacart."""

    client_secret: str
    """The client secret provided by Instacart."""

    scope: str
    """The API scope to request access for, such as connect:fulfillment."""


class TokenRequestDict(TypedDict):
    grant_type: Literal["client_credentials"]
    client_id: str
    client_secret: str
    scope: str
