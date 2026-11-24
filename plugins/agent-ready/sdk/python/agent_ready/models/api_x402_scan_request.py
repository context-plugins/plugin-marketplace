from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiX402ScanRequest(SdkBaseModel):
    """The website URL to scan."""

    url: str


class ApiX402ScanRequestDict(TypedDict):
    url: str
