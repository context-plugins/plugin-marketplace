from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.type7 import Type7OrStr


class ProfilePost(SdkBaseModel):
    id: str
    social_account_id: str = Field(alias="socialAccountId")
    post_id: OptionalNullable[str] = Field(default=UNSET, alias="postId")
    external_id: OptionalNullable[str] = Field(default=UNSET, alias="externalId")
    title: OptionalNullable[str] = UNSET
    description: OptionalNullable[str] = UNSET
    small_thumbnail: OptionalNullable[str] = Field(default=UNSET, alias="smallThumbnail")
    thumbnail: OptionalNullable[str] = UNSET
    permalink: OptionalNullable[str] = UNSET
    extra_data: Optional[Any] = Field(default=UNSET, alias="extraData")
    subreddit: OptionalNullable[str] = UNSET
    published_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="publishedAt")
    type_: Type7OrStr = Field(alias="type")
    internal: bool
    imported_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="importedAt")
    externally_deleted_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="externallyDeletedAt")
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")
    deleted_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="deletedAt")


class ProfilePostDict(TypedDict):
    id: str
    social_account_id: str
    post_id: NotRequired[str | None]
    external_id: NotRequired[str | None]
    title: NotRequired[str | None]
    description: NotRequired[str | None]
    small_thumbnail: NotRequired[str | None]
    thumbnail: NotRequired[str | None]
    permalink: NotRequired[str | None]
    extra_data: NotRequired[Any]
    subreddit: NotRequired[str | None]
    published_at: NotRequired[RFC3339DateTime | None]
    type_: Type7OrStr
    internal: bool
    imported_at: NotRequired[RFC3339DateTime | None]
    externally_deleted_at: NotRequired[RFC3339DateTime | None]
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    deleted_at: NotRequired[RFC3339DateTime | None]
