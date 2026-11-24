from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1SyllablecounterRequest(SdkBaseModel):
    text: str
    """The text to count syllables in (max 500 characters)"""


class V1SyllablecounterRequestDict(TypedDict):
    text: str
