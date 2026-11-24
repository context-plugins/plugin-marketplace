from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1LanguagedetectorRequest(SdkBaseModel):
    text: str
    """The text to detect the language of"""


class V1LanguagedetectorRequestDict(TypedDict):
    text: str
