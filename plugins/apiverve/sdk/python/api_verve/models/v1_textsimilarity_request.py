from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1TextsimilarityRequest(SdkBaseModel):
    text1: str
    """The first text to compare. Must be less than 1000 characters"""

    text2: str
    """The second text to compare. Must be less than 1000 characters"""


class V1TextsimilarityRequestDict(TypedDict):
    text1: str
    text2: str
