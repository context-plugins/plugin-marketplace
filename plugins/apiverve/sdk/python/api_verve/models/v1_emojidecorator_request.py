from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1EmojidecoratorRequest(SdkBaseModel):
    text: str
    """The text you want decorated with emojis"""


class V1EmojidecoratorRequestDict(TypedDict):
    text: str
