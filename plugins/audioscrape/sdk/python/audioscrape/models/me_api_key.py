from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class MeApiKey(SdkBaseModel):
    id: int
    key_name: str
    pinned_version: str
    """Dated API version the key is pinned to (see ``Audioscrape-Version``)."""


class MeApiKeyDict(TypedDict):
    id: int
    key_name: str
    pinned_version: str
