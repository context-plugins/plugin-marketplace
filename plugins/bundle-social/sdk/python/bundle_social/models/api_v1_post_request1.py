from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .data import Data, DataDict
from .enums.social_account_type_bundle_social_organization_api import SocialAccountTypeBundleSocialOrganizationApiOrStr
from .enums.status5 import Status5OrStr
from .first_comment2 import FirstComment2, FirstComment2Dict


class ApiV1PostRequest1(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    title: str
    reference_key: OptionalNullable[str] = Field(default=UNSET, alias="referenceKey")
    post_date: str = Field(alias="postDate")
    status: Status5OrStr
    social_account_types: list[SocialAccountTypeBundleSocialOrganizationApiOrStr] = Field(alias="socialAccountTypes")
    data: Data
    first_comment: OptionalNullable[FirstComment2] = Field(default=UNSET, alias="firstComment")


class ApiV1PostRequest1Dict(TypedDict):
    team_id: str
    title: str
    reference_key: NotRequired[str | None]
    post_date: str
    status: Status5OrStr
    social_account_types: list[SocialAccountTypeBundleSocialOrganizationApiOrStr]
    data: DataDict
    first_comment: NotRequired[FirstComment2Dict | None]
