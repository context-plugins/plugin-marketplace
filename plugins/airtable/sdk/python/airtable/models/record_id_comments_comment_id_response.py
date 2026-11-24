from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RecordIdCommentsCommentIdResponse(SdkBaseModel):
    id: Optional[str] = UNSET
    """The ID of the deleted comment."""

    deleted: Optional[bool] = UNSET
    """Always true when the deletion succeeds."""


class RecordIdCommentsCommentIdResponseDict(TypedDict):
    id: NotRequired[str]
    deleted: NotRequired[bool]
