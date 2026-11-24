from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SsmlMessage(SdkBaseModel):
    value: str
    """The SSML text that defines the prompt."""


class SsmlMessageDict(TypedDict):
    value: str
