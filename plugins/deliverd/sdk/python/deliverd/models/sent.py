from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Sent(SdkBaseModel):
    email: str
    delivered: bool
    """The mail provider accepted it. Not that it was read"""


class SentDict(TypedDict):
    email: str
    delivered: bool
