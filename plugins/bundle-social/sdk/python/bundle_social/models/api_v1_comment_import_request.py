from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.social_account_type import SocialAccountTypeOrStr


class ApiV1CommentImportRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    post_id: Optional[str] = Field(default=UNSET, alias="postId")
    imported_post_id: Optional[str] = Field(default=UNSET, alias="importedPostId")
    social_account_type: SocialAccountTypeOrStr = Field(alias="socialAccountType")


class ApiV1CommentImportRequestDict(TypedDict):
    team_id: str
    post_id: NotRequired[str]
    imported_post_id: NotRequired[str]
    social_account_type: SocialAccountTypeOrStr
