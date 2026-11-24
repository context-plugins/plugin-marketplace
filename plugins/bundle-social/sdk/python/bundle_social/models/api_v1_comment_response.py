from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .data_bundle_social_comment_api import DataBundleSocialCommentApi, DataBundleSocialCommentApiDict
from .enums.status4 import Status4OrStr
from .errors_bundle_social_comment_api import ErrorsBundleSocialCommentApi, ErrorsBundleSocialCommentApiDict
from .errors_verbose_bundle_social_comment_api import (
    ErrorsVerboseBundleSocialCommentApi,
    ErrorsVerboseBundleSocialCommentApiDict,
)
from .external_data_bundle_social_comment_api import (
    ExternalDataBundleSocialCommentApi,
    ExternalDataBundleSocialCommentApiDict,
)


class ApiV1CommentResponse(SdkBaseModel):
    id: str
    team_id: str = Field(alias="teamId")
    organization_id: OptionalNullable[str] = Field(default=UNSET, alias="organizationId")
    internal_post_id: OptionalNullable[str] = Field(default=UNSET, alias="internalPostId")
    imported_post_id: OptionalNullable[str] = Field(default=UNSET, alias="importedPostId")
    internal_parent_comment_id: OptionalNullable[str] = Field(default=UNSET, alias="internalParentCommentId")
    fetched_parent_comment_id: OptionalNullable[str] = Field(default=UNSET, alias="fetchedParentCommentId")
    title: OptionalNullable[str] = UNSET
    post_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="postDate")
    posted_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="postedDate")
    status: Status4OrStr
    data: DataBundleSocialCommentApi
    error: OptionalNullable[str] = UNSET
    errors: OptionalNullable[ErrorsBundleSocialCommentApi] = UNSET
    errors_verbose: OptionalNullable[ErrorsVerboseBundleSocialCommentApi] = Field(default=UNSET, alias="errorsVerbose")
    external_data: OptionalNullable[ExternalDataBundleSocialCommentApi] = Field(default=UNSET, alias="externalData")
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")
    deleted_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="deletedAt")


class ApiV1CommentResponseDict(TypedDict):
    id: str
    team_id: str
    organization_id: NotRequired[str | None]
    internal_post_id: NotRequired[str | None]
    imported_post_id: NotRequired[str | None]
    internal_parent_comment_id: NotRequired[str | None]
    fetched_parent_comment_id: NotRequired[str | None]
    title: NotRequired[str | None]
    post_date: NotRequired[RFC3339DateTime | None]
    posted_date: NotRequired[RFC3339DateTime | None]
    status: Status4OrStr
    data: DataBundleSocialCommentApiDict
    error: NotRequired[str | None]
    errors: NotRequired[ErrorsBundleSocialCommentApiDict | None]
    errors_verbose: NotRequired[ErrorsVerboseBundleSocialCommentApiDict | None]
    external_data: NotRequired[ExternalDataBundleSocialCommentApiDict | None]
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    deleted_at: NotRequired[RFC3339DateTime | None]
