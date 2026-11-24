from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UpdateTaskCommentRequest(SdkBaseModel):
    body: str


class UpdateTaskCommentRequestDict(TypedDict):
    body: str
