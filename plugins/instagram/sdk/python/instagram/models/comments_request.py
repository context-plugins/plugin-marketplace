from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CommentsRequest(SdkBaseModel):
    message: str
    """The comment text."""

    access_token: str


class CommentsRequestDict(TypedDict):
    message: str
    access_token: str
