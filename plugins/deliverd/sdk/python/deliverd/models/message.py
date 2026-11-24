from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Message(SdkBaseModel):
    comment_id: UUID = Field(alias="commentId")
    author: str
    author_type: str = Field(alias="authorType")
    body: str
    created_at: str = Field(alias="createdAt")
    retractable: bool


class MessageDict(TypedDict):
    comment_id: UUID
    author: str
    author_type: str
    body: str
    created_at: str
    retractable: bool
