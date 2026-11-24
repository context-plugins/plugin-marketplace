from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PartnerOauthTokenResponse(SdkBaseModel):
    access_token: str
    """The new access token."""

    token_type: Literal["bearer"] = "bearer"
    """The type of token returned."""

    expires_in: float
    """The expiration time of the new access token in seconds."""


class PartnerOauthTokenResponseDict(TypedDict):
    access_token: str
    token_type: Literal["bearer"]
    expires_in: float
