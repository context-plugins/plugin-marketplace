from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.review_reply_state import ReviewReplyStateOrStr
from .enums.star_rating import StarRatingOrStr


class Review(SdkBaseModel):
    id: str
    social_account_id: str = Field(alias="socialAccountId")
    team_id: str = Field(alias="teamId")
    external_review_id: str = Field(alias="externalReviewId")
    reviewer_display_name: OptionalNullable[str] = Field(default=UNSET, alias="reviewerDisplayName")
    reviewer_profile_photo_url: OptionalNullable[str] = Field(default=UNSET, alias="reviewerProfilePhotoUrl")
    star_rating: OptionalNullable[StarRatingOrStr] = Field(default=UNSET, alias="starRating")
    comment: OptionalNullable[str] = UNSET
    review_reply_comment: OptionalNullable[str] = Field(default=UNSET, alias="reviewReplyComment")
    review_reply_updated_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="reviewReplyUpdatedAt")
    review_reply_state: OptionalNullable[ReviewReplyStateOrStr] = Field(default=UNSET, alias="reviewReplyState")
    review_reply_policy_violation: OptionalNullable[str] = Field(default=UNSET, alias="reviewReplyPolicyViolation")
    review_reply_url: OptionalNullable[str] = Field(default=UNSET, alias="reviewReplyUrl")
    create_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="createTime")
    update_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="updateTime")
    imported_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="importedAt")
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")
    deleted_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="deletedAt")


class ReviewDict(TypedDict):
    id: str
    social_account_id: str
    team_id: str
    external_review_id: str
    reviewer_display_name: NotRequired[str | None]
    reviewer_profile_photo_url: NotRequired[str | None]
    star_rating: NotRequired[StarRatingOrStr | None]
    comment: NotRequired[str | None]
    review_reply_comment: NotRequired[str | None]
    review_reply_updated_at: NotRequired[RFC3339DateTime | None]
    review_reply_state: NotRequired[ReviewReplyStateOrStr | None]
    review_reply_policy_violation: NotRequired[str | None]
    review_reply_url: NotRequired[str | None]
    create_time: NotRequired[RFC3339DateTime | None]
    update_time: NotRequired[RFC3339DateTime | None]
    imported_at: NotRequired[RFC3339DateTime | None]
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    deleted_at: NotRequired[RFC3339DateTime | None]
