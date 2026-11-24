from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1ReadabilityscoreRequest(SdkBaseModel):
    text: str
    """The text to calculate the readability score of"""


class V1ReadabilityscoreRequestDict(TypedDict):
    text: str
