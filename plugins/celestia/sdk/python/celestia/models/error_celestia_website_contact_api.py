from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ErrorCelestiaWebsiteContactApi(SdkBaseModel):
    error: str
    """Human-readable error message; retained for form clients."""

    code: str
    """Stable machine-readable error identifier."""

    hint: str
    """Suggested action to resolve the error."""


class ErrorCelestiaWebsiteContactApiDict(TypedDict):
    error: str
    code: str
    hint: str
