from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1TextlanguageRequest(SdkBaseModel):
    text: str
    """The text to detect the language of"""


class V1TextlanguageRequestDict(TypedDict):
    text: str
