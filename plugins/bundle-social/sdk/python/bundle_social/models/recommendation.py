from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.recommendation_value import RecommendationValueOrStr


class Recommendation(SdkBaseModel):
    id: str
    social_account_id: str = Field(alias="socialAccountId")
    team_id: str = Field(alias="teamId")
    external_recommendation_id: str = Field(alias="externalRecommendationId")
    open_graph_story_id: OptionalNullable[str] = Field(default=UNSET, alias="openGraphStoryId")
    reviewer_display_name: OptionalNullable[str] = Field(default=UNSET, alias="reviewerDisplayName")
    reviewer_profile_photo_url: OptionalNullable[str] = Field(default=UNSET, alias="reviewerProfilePhotoUrl")
    recommendation_value: OptionalNullable[RecommendationValueOrStr] = Field(default=UNSET, alias="recommendationValue")
    rating: OptionalNullable[float] = UNSET
    comment: OptionalNullable[str] = UNSET
    has_media: bool = Field(alias="hasMedia")
    media_summary: OptionalNullable[list[str]] = Field(default=UNSET, alias="mediaSummary")
    owner_reply_comment: OptionalNullable[str] = Field(default=UNSET, alias="ownerReplyComment")
    owner_reply_comment_id: OptionalNullable[str] = Field(default=UNSET, alias="ownerReplyCommentId")
    owner_reply_updated_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="ownerReplyUpdatedAt")
    create_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="createTime")
    update_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="updateTime")
    imported_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="importedAt")
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")
    deleted_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="deletedAt")


class RecommendationDict(TypedDict):
    id: str
    social_account_id: str
    team_id: str
    external_recommendation_id: str
    open_graph_story_id: NotRequired[str | None]
    reviewer_display_name: NotRequired[str | None]
    reviewer_profile_photo_url: NotRequired[str | None]
    recommendation_value: NotRequired[RecommendationValueOrStr | None]
    rating: NotRequired[float | None]
    comment: NotRequired[str | None]
    has_media: bool
    media_summary: NotRequired[list[str] | None]
    owner_reply_comment: NotRequired[str | None]
    owner_reply_comment_id: NotRequired[str | None]
    owner_reply_updated_at: NotRequired[RFC3339DateTime | None]
    create_time: NotRequired[RFC3339DateTime | None]
    update_time: NotRequired[RFC3339DateTime | None]
    imported_at: NotRequired[RFC3339DateTime | None]
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    deleted_at: NotRequired[RFC3339DateTime | None]
