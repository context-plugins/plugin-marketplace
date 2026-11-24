from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class CreateServiceAccountTokenRequest(SdkBaseModel):
    """Fields of a new API token."""

    name: str
    """Name, unique among the service account's tokens. Leading or trailing whitespace returns ``400``."""

    expires_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="expiresTime")
    """When the token should stop authenticating. Omit to let the server set the default expiry."""


class CreateServiceAccountTokenRequestDict(TypedDict):
    name: str
    expires_time: NotRequired[RFC3339DateTime]
