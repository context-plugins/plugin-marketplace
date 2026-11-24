from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1VowelcounterRequest(SdkBaseModel):
    text: str
    """Text to analyze (max 50,000 characters)"""


class V1VowelcounterRequestDict(TypedDict):
    text: str
