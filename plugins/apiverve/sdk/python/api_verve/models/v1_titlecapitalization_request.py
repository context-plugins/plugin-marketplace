from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1TitlecapitalizationRequest(SdkBaseModel):
    text: str
    """The text to convert to title case"""

    style: str
    """The case to convert the text to"""


class V1TitlecapitalizationRequestDict(TypedDict):
    text: str
    style: str
