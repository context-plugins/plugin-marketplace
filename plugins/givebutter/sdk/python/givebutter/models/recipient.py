from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Recipient(SdkBaseModel):
    name: str | None
    email: str | None


class RecipientDict(TypedDict):
    name: str | None
    email: str | None
