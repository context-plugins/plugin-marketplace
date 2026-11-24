from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .secret4 import Secret4, Secret4Dict


class UserPasswordCredentials2(SdkBaseModel):
    """User-password authentication."""

    username: Optional[str] = UNSET
    """Required. Username for the connection."""

    password: Optional[Secret4] = UNSET
    """Required. Password for the connection."""


class UserPasswordCredentials2Dict(TypedDict):
    username: NotRequired[str]
    password: NotRequired[Secret4Dict]
