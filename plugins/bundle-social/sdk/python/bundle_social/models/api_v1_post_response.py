from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .data import Data, DataDict
from .enums.status import StatusOrStr
from .errors_model import ErrorsModel, ErrorsModelDict
from .errors_verbose import ErrorsVerbose, ErrorsVerboseDict
from .external_data import ExternalData, ExternalDataDict
from .first_comment import FirstComment, FirstCommentDict
from .social_account_bundle_social_post_api import (
    SocialAccountBundleSocialPostApi,
    SocialAccountBundleSocialPostApiDict,
)
from .upload import Upload, UploadDict


class ApiV1PostResponse(SdkBaseModel):
    id: str
    team_id: str = Field(alias="teamId")
    organization_id: OptionalNullable[str] = Field(default=UNSET, alias="organizationId")
    title: str
    reference_key: OptionalNullable[str] = Field(default=UNSET, alias="referenceKey")
    post_date: RFC3339DateTime | None = Field(alias="postDate")
    posted_date: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="postedDate")
    status: StatusOrStr
    data: Data
    error: OptionalNullable[str] = UNSET
    errors: OptionalNullable[ErrorsModel] = UNSET
    errors_verbose: OptionalNullable[ErrorsVerbose] = Field(default=UNSET, alias="errorsVerbose")
    external_data: OptionalNullable[ExternalData] = Field(default=UNSET, alias="externalData")
    retry_count: float = Field(alias="retryCount")
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")
    deleted_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="deletedAt")
    first_comment: OptionalNullable[FirstComment] = Field(default=UNSET, alias="firstComment")
    uploads: list[Upload]
    social_accounts: list[SocialAccountBundleSocialPostApi] = Field(alias="socialAccounts")


class ApiV1PostResponseDict(TypedDict):
    id: str
    team_id: str
    organization_id: NotRequired[str | None]
    title: str
    reference_key: NotRequired[str | None]
    post_date: RFC3339DateTime | None
    posted_date: NotRequired[RFC3339DateTime | None]
    status: StatusOrStr
    data: DataDict
    error: NotRequired[str | None]
    errors: NotRequired[ErrorsModelDict | None]
    errors_verbose: NotRequired[ErrorsVerboseDict | None]
    external_data: NotRequired[ExternalDataDict | None]
    retry_count: float
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    deleted_at: NotRequired[RFC3339DateTime | None]
    first_comment: NotRequired[FirstCommentDict | None]
    uploads: list[UploadDict]
    social_accounts: list[SocialAccountBundleSocialPostApiDict]
