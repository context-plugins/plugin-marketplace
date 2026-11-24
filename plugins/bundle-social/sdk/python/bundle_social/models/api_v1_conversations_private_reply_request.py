from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .content1 import Content1, Content1Dict


class ApiV1ConversationsPrivateReplyRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    fetched_comment_id: str = Field(alias="fetchedCommentId")
    content: Content1


class ApiV1ConversationsPrivateReplyRequestDict(TypedDict):
    team_id: str
    fetched_comment_id: str
    content: Content1Dict
