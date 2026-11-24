from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1TranslatorRequest(SdkBaseModel):
    text: str
    """The text to translate"""

    target: str
    """The language code to translate the text to (e.g., fr, es, de)"""

    source: Optional[str] = UNSET
    """The language code of the text to translate (e.g., en). If left blank, language will be auto-detected"""


class V1TranslatorRequestDict(TypedDict):
    text: str
    target: str
    source: NotRequired[str]
