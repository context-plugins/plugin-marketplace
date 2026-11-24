from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CustomProxyModel(SdkBaseModel):
    """Request model for creating a custom proxy."""

    host: str
    """Host of the proxy."""

    port: int
    """Port of the proxy."""

    username: Optional[str] = UNSET
    """Username for proxy authentication."""

    password: Optional[str] = UNSET
    """Password for proxy authentication."""

    ignore_cert_errors: bool = Field(default=False, alias="ignoreCertErrors")
    """Ignore TLS certificate errors. Enable this if your proxy uses a self-signed or untrusted certificate (e.g. Burp
    Suite, corporate proxies)."""


class CustomProxyModelDict(TypedDict):
    host: str
    port: int
    username: NotRequired[str]
    password: NotRequired[str]
    ignore_cert_errors: NotRequired[bool]
