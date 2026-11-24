from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class MeApiKey1(SdkBaseModel):
    """API key the request was authenticated with. ``null`` when authenticated via session cookie (e.g. logged-in
    browser hitting the API)."""

    id: int
    key_name: str
    pinned_version: str
    """Dated API version the key is pinned to (see ``Audioscrape-Version``)."""


class MeApiKey1Dict(TypedDict):
    id: int
    key_name: str
    pinned_version: str
