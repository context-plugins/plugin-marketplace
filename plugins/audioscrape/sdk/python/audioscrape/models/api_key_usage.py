from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiKeyUsage(SdkBaseModel):
    key_id: int
    requests: int
    """Requests that authenticated with this key inside the window."""

    window_days: int
    """Trailing window the count covers, in days."""


class ApiKeyUsageDict(TypedDict):
    key_id: int
    requests: int
    window_days: int
