from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1SpellcheckerRequest(SdkBaseModel):
    text: str
    """The text to check the spelling of"""


class V1SpellcheckerRequestDict(TypedDict):
    text: str
