from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TechnologySearchRequest(SdkBaseModel):
    text: str
    """Search text for technology"""


class TechnologySearchRequestDict(TypedDict):
    text: str
