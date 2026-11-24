from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CreateSendToRequest(SdkBaseModel):
    title: str
    """Title of the document."""

    content: str
    """Base64 Encoded Document."""


class CreateSendToRequestDict(TypedDict):
    title: str
    content: str
