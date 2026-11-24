from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FetchReadTokenResponse(SdkBaseModel):
    """Message for responding to get read token."""

    expiration_time: Optional[str] = Field(default=UNSET, alias="expirationTime")
    """Expiration timestamp. Can be empty if unknown or non-expiring."""

    token: Optional[str] = UNSET
    """The token content."""


class FetchReadTokenResponseDict(TypedDict):
    expiration_time: NotRequired[str]
    token: NotRequired[str]
