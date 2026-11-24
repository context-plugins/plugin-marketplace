from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1RemovepunctuationRequest(SdkBaseModel):
    text: str
    """The text to remove punctuation from"""


class V1RemovepunctuationRequestDict(TypedDict):
    text: str
