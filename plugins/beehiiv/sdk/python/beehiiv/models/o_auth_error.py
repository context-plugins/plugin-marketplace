from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OAuthError(SdkBaseModel):
    """Standard OAuth2 error response."""

    error: str
    error_description: Optional[str] = UNSET
    error_uri: Optional[str] = UNSET
    state: Optional[str] = UNSET


class OAuthErrorDict(TypedDict):
    error: str
    error_description: NotRequired[str]
    error_uri: NotRequired[str]
    state: NotRequired[str]
