from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateTaskCommentRequest(SdkBaseModel):
    body: str
    parent_id: Optional[UUID] = UNSET


class CreateTaskCommentRequestDict(TypedDict):
    body: str
    parent_id: NotRequired[UUID]
