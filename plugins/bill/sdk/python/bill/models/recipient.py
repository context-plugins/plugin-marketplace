from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Recipient(SdkBaseModel):
    to: list[str]
    """Recipient email addresses"""


class RecipientDict(TypedDict):
    to: list[str]
