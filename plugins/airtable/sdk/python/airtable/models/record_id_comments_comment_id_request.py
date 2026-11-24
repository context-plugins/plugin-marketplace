from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RecordIdCommentsCommentIdRequest(SdkBaseModel):
    text: str
    """The updated text content of the comment."""


class RecordIdCommentsCommentIdRequestDict(TypedDict):
    text: str
