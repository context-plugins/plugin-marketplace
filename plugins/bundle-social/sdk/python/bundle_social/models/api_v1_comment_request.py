from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .data_bundle_social_comment_api import DataBundleSocialCommentApi, DataBundleSocialCommentApiDict
from .enums.social_account_type1 import SocialAccountType1OrStr
from .enums.status5 import Status5OrStr


class ApiV1CommentRequest(SdkBaseModel):
    title: Optional[str] = UNSET
    internal_post_id: Optional[str] = Field(default=UNSET, alias="internalPostId")
    imported_post_id: Optional[str] = Field(default=UNSET, alias="importedPostId")
    internal_parent_comment_id: OptionalNullable[str] = Field(default=UNSET, alias="internalParentCommentId")
    fetched_parent_comment_id: OptionalNullable[str] = Field(default=UNSET, alias="fetchedParentCommentId")
    post_date: Optional[str] = Field(default=UNSET, alias="postDate")
    status: Optional[Status5OrStr] = UNSET
    social_account_types: Optional[list[SocialAccountType1OrStr]] = Field(default=UNSET, alias="socialAccountTypes")
    data: Optional[DataBundleSocialCommentApi] = UNSET
    text: Optional[str] = UNSET


class ApiV1CommentRequestDict(TypedDict):
    title: NotRequired[str]
    internal_post_id: NotRequired[str]
    imported_post_id: NotRequired[str]
    internal_parent_comment_id: NotRequired[str | None]
    fetched_parent_comment_id: NotRequired[str | None]
    post_date: NotRequired[str]
    status: NotRequired[Status5OrStr]
    social_account_types: NotRequired[list[SocialAccountType1OrStr]]
    data: NotRequired[DataBundleSocialCommentApiDict]
    text: NotRequired[str]
