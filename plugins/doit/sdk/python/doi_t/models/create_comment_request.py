from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class CreateCommentRequest(SdkBaseModel):
    """Request body for adding a comment to a support ticket."""

    body: str
    """The text content of the comment. Must not be empty."""

    private: bool = False
    """If true, creates a private internal note. Only honored for DoiT employees; ignored for customers."""


class CreateCommentRequestDict(TypedDict):
    body: str
    private: NotRequired[bool]
