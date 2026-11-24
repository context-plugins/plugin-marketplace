from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1TextsummarizerRequest(SdkBaseModel):
    text: str
    """The text to summarize (up to 5000 characters)"""

    sentences: Optional[float] = UNSET
    """The length of the summary (number of sentences)"""


class V1TextsummarizerRequestDict(TypedDict):
    text: str
    sentences: NotRequired[float]
