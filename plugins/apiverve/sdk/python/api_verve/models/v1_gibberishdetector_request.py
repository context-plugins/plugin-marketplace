from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1GibberishdetectorRequest(SdkBaseModel):
    text: str
    """Text to analyze (max 10,000 characters)"""


class V1GibberishdetectorRequestDict(TypedDict):
    text: str
