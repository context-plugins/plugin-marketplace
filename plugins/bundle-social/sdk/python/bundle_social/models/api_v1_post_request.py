from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .data import Data, DataDict
from .enums.social_account_type_bundle_social_organization_api import SocialAccountTypeBundleSocialOrganizationApiOrStr
from .enums.status5 import Status5OrStr
from .first_comment2 import FirstComment2, FirstComment2Dict


class ApiV1PostRequest(SdkBaseModel):
    title: Optional[str] = UNSET
    reference_key: OptionalNullable[str] = Field(default=UNSET, alias="referenceKey")
    post_date: Optional[str] = Field(default=UNSET, alias="postDate")
    status: Optional[Status5OrStr] = UNSET
    social_account_types: Optional[list[SocialAccountTypeBundleSocialOrganizationApiOrStr]] = Field(
        default=UNSET, alias="socialAccountTypes"
    )
    data: Optional[Data] = UNSET
    first_comment: OptionalNullable[FirstComment2] = Field(default=UNSET, alias="firstComment")


class ApiV1PostRequestDict(TypedDict):
    title: NotRequired[str]
    reference_key: NotRequired[str | None]
    post_date: NotRequired[str]
    status: NotRequired[Status5OrStr]
    social_account_types: NotRequired[list[SocialAccountTypeBundleSocialOrganizationApiOrStr]]
    data: NotRequired[DataDict]
    first_comment: NotRequired[FirstComment2Dict | None]
