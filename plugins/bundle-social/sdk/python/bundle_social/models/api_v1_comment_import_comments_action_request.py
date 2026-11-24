from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.action_bundle_social_comment_api import ActionBundleSocialCommentApiOrStr


class ApiV1CommentImportCommentsActionRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    action: ActionBundleSocialCommentApiOrStr
    reason: Optional[str] = UNSET
    ban_author: Optional[bool] = Field(default=UNSET, alias="banAuthor")


class ApiV1CommentImportCommentsActionRequestDict(TypedDict):
    team_id: str
    action: ActionBundleSocialCommentApiOrStr
    reason: NotRequired[str]
    ban_author: NotRequired[bool]
