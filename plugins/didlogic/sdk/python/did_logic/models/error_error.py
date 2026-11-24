from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ErrorError(SdkBaseModel):
    """Standard error response. ``errors`` maps a field name (or ``base`` for errors not tied to a specific field) to an
    array of human-readable messages."""

    errors: dict[str, Any]


class ErrorErrorDict(TypedDict):
    errors: dict[str, Any]
