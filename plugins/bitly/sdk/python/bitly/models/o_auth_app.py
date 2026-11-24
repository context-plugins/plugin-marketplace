from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OAuthApp(SdkBaseModel):
    name: str
    client_id: str
    description: str
    link: str
    require_oauth_pkce: bool
    internal_app: Optional[bool] = UNSET
    """True for Bitly's own first-party apps (dashboard, mobile apps), as opposed to third-party integrations."""


class OAuthAppDict(TypedDict):
    name: str
    client_id: str
    description: str
    link: str
    require_oauth_pkce: bool
    internal_app: NotRequired[bool]
