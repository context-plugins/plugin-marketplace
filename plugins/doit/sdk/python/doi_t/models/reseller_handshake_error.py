from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ResellerHandshakeError(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    code: str
    """Stable machine-readable error code for this item."""

    message: str
    """Human-readable explanation of the failure."""


class ResellerHandshakeErrorDict(TypedDict):
    code: str
    message: str
