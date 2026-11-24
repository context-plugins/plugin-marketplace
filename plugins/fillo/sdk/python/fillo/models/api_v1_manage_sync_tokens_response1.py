from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ManageSyncTokensResponse1(SdkBaseModel):
    token: str
    """The ``fsync_`` plaintext. Shown once — store it now."""

    name: str


class ApiV1ManageSyncTokensResponse1Dict(TypedDict):
    token: str
    name: str
