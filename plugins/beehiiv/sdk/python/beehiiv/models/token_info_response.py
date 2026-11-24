from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .token_application import TokenApplication, TokenApplicationDict


class TokenInfoResponse(SdkBaseModel):
    """Metadata for the current access token."""

    resource_owner_id: Optional[str] = UNSET
    scope: Optional[str] = UNSET
    expires_in_seconds: Optional[int] = UNSET
    application: Optional[TokenApplication] = UNSET
    """OAuth application metadata attached to token info responses."""

    created_at: Optional[int] = UNSET


class TokenInfoResponseDict(TypedDict):
    resource_owner_id: NotRequired[str]
    scope: NotRequired[str]
    expires_in_seconds: NotRequired[int]
    application: NotRequired[TokenApplicationDict]
    created_at: NotRequired[int]
