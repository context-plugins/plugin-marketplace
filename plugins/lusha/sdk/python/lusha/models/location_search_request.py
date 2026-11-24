from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class LocationSearchRequest(SdkBaseModel):
    text: str
    """Search text for location"""


class LocationSearchRequestDict(TypedDict):
    text: str
