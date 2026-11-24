from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TriggerErrorResponse(SdkBaseModel):
    """Body returned on a request-level failure (400/404/409/429) so the caller knows why the request was rejected."""

    model_config = ConfigDict(extra="forbid")

    error: str
    """Human-readable description of why the request failed."""


class TriggerErrorResponseDict(TypedDict):
    error: str
