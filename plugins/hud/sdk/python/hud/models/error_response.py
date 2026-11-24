from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.error_source import ErrorSourceOrStr


class ErrorResponse(SdkBaseModel):
    """The uniform ``{error, source, detail}`` envelope returned for every 4xx/5xx."""

    error: str
    source: ErrorSourceOrStr
    """Who is at fault for a failure.

    ``user``: the customer's input, account, environment, or agent code. ``platform``: HUD infrastructure or a broken
    platform invariant. ``provider``: a third-party dependency (cloud runtime, upstream LLM API)."""

    detail: str


class ErrorResponseDict(TypedDict):
    error: str
    source: ErrorSourceOrStr
    detail: str
