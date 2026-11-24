from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1LemmatizerRequest(SdkBaseModel):
    text: str
    """The text to lemmatize"""


class V1LemmatizerRequestDict(TypedDict):
    text: str
