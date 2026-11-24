from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.platform32 import Platform32OrStr
from .platform_data2 import PlatformData2, PlatformData2Dict


class FetchedComment(SdkBaseModel):
    id: str
    team_id: str = Field(alias="teamId")
    organization_id: OptionalNullable[str] = Field(default=UNSET, alias="organizationId")
    post_id: OptionalNullable[str] = Field(default=UNSET, alias="postId")
    imported_post_id: OptionalNullable[str] = Field(default=UNSET, alias="importedPostId")
    social_account_id: str = Field(alias="socialAccountId")
    import_id: str = Field(alias="importId")
    platform: Platform32OrStr
    external_id: str = Field(alias="externalId")
    external_parent_id: OptionalNullable[str] = Field(default=UNSET, alias="externalParentId")
    external_post_id: OptionalNullable[str] = Field(default=UNSET, alias="externalPostId")
    author_name: OptionalNullable[str] = Field(default=UNSET, alias="authorName")
    author_external_id: OptionalNullable[str] = Field(default=UNSET, alias="authorExternalId")
    author_profile_url: OptionalNullable[str] = Field(default=UNSET, alias="authorProfileUrl")
    author_avatar_url: OptionalNullable[str] = Field(default=UNSET, alias="authorAvatarUrl")
    text: OptionalNullable[str] = UNSET
    likes_count: float = Field(alias="likesCount")
    replies_count: float = Field(alias="repliesCount")
    platform_data: Optional[PlatformData2] = Field(default=UNSET, alias="platformData")
    published_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="publishedAt")
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")
    deleted_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="deletedAt")


class FetchedCommentDict(TypedDict):
    id: str
    team_id: str
    organization_id: NotRequired[str | None]
    post_id: NotRequired[str | None]
    imported_post_id: NotRequired[str | None]
    social_account_id: str
    import_id: str
    platform: Platform32OrStr
    external_id: str
    external_parent_id: NotRequired[str | None]
    external_post_id: NotRequired[str | None]
    author_name: NotRequired[str | None]
    author_external_id: NotRequired[str | None]
    author_profile_url: NotRequired[str | None]
    author_avatar_url: NotRequired[str | None]
    text: NotRequired[str | None]
    likes_count: float
    replies_count: float
    platform_data: NotRequired[PlatformData2Dict]
    published_at: NotRequired[RFC3339DateTime | None]
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    deleted_at: NotRequired[RFC3339DateTime | None]
