from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .social_account import SocialAccount, SocialAccountDict


class SocialAccountBundleSocialPostApi(SdkBaseModel):
    post_id: str = Field(alias="postId")
    social_account_id: str = Field(alias="socialAccountId")
    external_post_id: OptionalNullable[str] = Field(default=UNSET, alias="externalPostId")
    external_alternate_post_id: OptionalNullable[str] = Field(default=UNSET, alias="externalAlternatePostId")
    external_video_id: OptionalNullable[str] = Field(default=UNSET, alias="externalVideoId")
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")
    deleted_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="deletedAt")
    social_account: SocialAccount = Field(alias="socialAccount")


class SocialAccountBundleSocialPostApiDict(TypedDict):
    post_id: str
    social_account_id: str
    external_post_id: NotRequired[str | None]
    external_alternate_post_id: NotRequired[str | None]
    external_video_id: NotRequired[str | None]
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    deleted_at: NotRequired[RFC3339DateTime | None]
    social_account: SocialAccountDict
