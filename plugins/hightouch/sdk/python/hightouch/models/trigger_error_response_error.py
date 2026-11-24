from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TriggerErrorResponseError(SdkBaseModel):
    """Body returned on a request-level failure (400/404/409/429) so the caller knows why the request was rejected."""

    error: str
    """Human-readable description of why the request failed."""


class TriggerErrorResponseErrorDict(TypedDict):
    error: str
