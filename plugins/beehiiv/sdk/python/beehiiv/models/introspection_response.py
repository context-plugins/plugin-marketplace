from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.token_type import TokenTypeOrStr


class IntrospectionResponse(SdkBaseModel):
    """RFC 7662 token introspection response."""

    active: bool
    scope: Optional[str] = UNSET
    client_id: Optional[str] = UNSET
    token_type: Optional[TokenTypeOrStr] = UNSET
    """The token type returned by OAuth2 token endpoints."""

    exp: Optional[int] = UNSET
    iat: Optional[int] = UNSET
    nbf: Optional[int] = UNSET
    sub: Optional[str] = UNSET
    aud: Optional[str] = UNSET
    iss: Optional[str] = UNSET
    jti: Optional[str] = UNSET


class IntrospectionResponseDict(TypedDict):
    active: bool
    scope: NotRequired[str]
    client_id: NotRequired[str]
    token_type: NotRequired[TokenTypeOrStr]
    exp: NotRequired[int]
    iat: NotRequired[int]
    nbf: NotRequired[int]
    sub: NotRequired[str]
    aud: NotRequired[str]
    iss: NotRequired[str]
    jti: NotRequired[str]
