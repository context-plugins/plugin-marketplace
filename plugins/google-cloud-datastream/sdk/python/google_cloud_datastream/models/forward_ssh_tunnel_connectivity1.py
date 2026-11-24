from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ForwardSshTunnelConnectivity1(SdkBaseModel):
    """Forward SSH tunnel connectivity."""

    hostname: Optional[str] = UNSET
    """Required. Hostname for the SSH tunnel."""

    username: Optional[str] = UNSET
    """Required. Username for the SSH tunnel."""

    password: Optional[str] = UNSET
    """Input only. SSH password."""

    port: Optional[int] = UNSET
    """Port for the SSH tunnel, default value is 22."""

    private_key: Optional[str] = Field(default=UNSET, alias="privateKey")
    """Input only. SSH private key."""


class ForwardSshTunnelConnectivity1Dict(TypedDict):
    hostname: NotRequired[str]
    username: NotRequired[str]
    password: NotRequired[str]
    port: NotRequired[int]
    private_key: NotRequired[str]
