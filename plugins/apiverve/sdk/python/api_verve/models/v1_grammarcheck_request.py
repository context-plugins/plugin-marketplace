from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1GrammarcheckRequest(SdkBaseModel):
    text: str
    """The text you want to check for grammatical and spelling errors"""


class V1GrammarcheckRequestDict(TypedDict):
    text: str
