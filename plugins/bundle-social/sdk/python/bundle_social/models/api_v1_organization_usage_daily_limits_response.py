from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .comments import Comments, CommentsDict
from .enums.type import TypeOrStr
from .posts import Posts, PostsDict


class ApiV1OrganizationUsageDailyLimitsResponse(SdkBaseModel):
    date: str
    social_account_id: str = Field(alias="socialAccountId")
    type_: TypeOrStr = Field(alias="type")
    posts: Posts
    comments: Comments


class ApiV1OrganizationUsageDailyLimitsResponseDict(TypedDict):
    date: str
    social_account_id: str
    type_: TypeOrStr
    posts: PostsDict
    comments: CommentsDict
