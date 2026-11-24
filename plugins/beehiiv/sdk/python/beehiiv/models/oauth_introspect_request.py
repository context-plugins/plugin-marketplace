from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.token_type_hint1 import TokenTypeHint1OrStr


class OauthIntrospectRequest(SdkBaseModel):
    token: str
    """The access or refresh token to introspect."""

    token_type_hint: Optional[TokenTypeHint1OrStr] = UNSET
    """Optional hint to help the server process the token faster."""

    client_id: Optional[str] = UNSET
    """OAuth application client ID (``uid``)."""

    client_secret: Optional[str] = UNSET
    """Required for confidential clients."""


class OauthIntrospectRequestDict(TypedDict):
    token: str
    token_type_hint: NotRequired[TokenTypeHint1OrStr]
    client_id: NotRequired[str]
    client_secret: NotRequired[str]
