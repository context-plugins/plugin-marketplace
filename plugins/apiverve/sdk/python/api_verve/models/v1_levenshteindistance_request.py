from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1LevenshteindistanceRequest(SdkBaseModel):
    string1: str
    """First string to compare (max 10,000 characters)"""

    string2: str
    """Second string to compare (max 10,000 characters)"""


class V1LevenshteindistanceRequestDict(TypedDict):
    string1: str
    string2: str
