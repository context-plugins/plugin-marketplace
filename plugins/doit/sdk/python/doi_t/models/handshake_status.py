from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class HandshakeStatus(SdkBaseModel):
    """Per-AWS-Organizations-handshake-state counts across all tenants mapped to a PMA."""

    model_config = ConfigDict(extra="forbid")

    total: int
    requested: int
    open: int
    accepted: int
    declined: int
    canceled: int
    expired: int


class HandshakeStatusDict(TypedDict):
    total: int
    requested: int
    open: int
    accepted: int
    declined: int
    canceled: int
    expired: int
