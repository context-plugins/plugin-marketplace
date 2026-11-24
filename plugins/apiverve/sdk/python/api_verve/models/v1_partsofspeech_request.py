from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1PartsofspeechRequest(SdkBaseModel):
    text: str
    """The text to extract words from"""

    partofspeech: Optional[str] = UNSET
    """The part of speech to extract. Defaults to nouns"""


class V1PartsofspeechRequestDict(TypedDict):
    text: str
    partofspeech: NotRequired[str]
