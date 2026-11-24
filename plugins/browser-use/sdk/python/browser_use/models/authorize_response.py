from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AuthorizeResponse(SdkBaseModel):
    """Response with OAuth redirect URL."""

    redirect_url: str
    provider: str


class AuthorizeResponseDict(TypedDict):
    redirect_url: str
    provider: str
