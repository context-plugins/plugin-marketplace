from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FetchReadWriteTokenResponse(SdkBaseModel):
    """Message for responding to get read/write token."""

    token: Optional[str] = UNSET
    """The token content."""

    expiration_time: Optional[str] = Field(default=UNSET, alias="expirationTime")
    """Expiration timestamp. Can be empty if unknown or non-expiring."""


class FetchReadWriteTokenResponseDict(TypedDict):
    token: NotRequired[str]
    expiration_time: NotRequired[str]
