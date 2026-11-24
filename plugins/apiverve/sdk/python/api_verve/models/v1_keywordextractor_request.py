from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1KeywordextractorRequest(SdkBaseModel):
    text: str
    """The text to extract keywords from"""


class V1KeywordextractorRequestDict(TypedDict):
    text: str
