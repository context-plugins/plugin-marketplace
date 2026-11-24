from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel


class ApiV1AnalyticsSocialAccountForceResponse(SdkBaseModel):
    id: str
    social_account_id: str = Field(alias="socialAccountId")
    impressions: float
    impressions_unique: float = Field(alias="impressionsUnique")
    views: float
    views_unique: float = Field(alias="viewsUnique")
    likes: float
    comments: float
    post_count: float = Field(alias="postCount")
    followers: float
    following: float
    forced: bool
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")
    deleted_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="deletedAt")


class ApiV1AnalyticsSocialAccountForceResponseDict(TypedDict):
    id: str
    social_account_id: str
    impressions: float
    impressions_unique: float
    views: float
    views_unique: float
    likes: float
    comments: float
    post_count: float
    followers: float
    following: float
    forced: bool
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    deleted_at: NotRequired[RFC3339DateTime | None]
