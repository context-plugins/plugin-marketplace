from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .api_key import ApiKey, ApiKeyDict
from .user import User, UserDict


class BootstrapVerifyOtpResponse(SdkBaseModel):
    token: str
    """The raw bearer token, returned exactly once."""

    key: ApiKey
    """The non-secret view of a key. The raw token is never stored and never appears here — only in the create/rotate
    responses."""

    user: User
    created: bool
    """True when this call registered a new account; false when the address already had one and simply received an
    additional key."""


class BootstrapVerifyOtpResponseDict(TypedDict):
    token: str
    key: ApiKeyDict
    user: UserDict
    created: bool
