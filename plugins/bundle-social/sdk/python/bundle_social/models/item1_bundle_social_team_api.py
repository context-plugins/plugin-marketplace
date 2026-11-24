from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .bio import Bio, BioDict
from .bot import Bot, BotDict
from .created_by import CreatedBy, CreatedByDict
from .organization_bundle_social_team_api import OrganizationBundleSocialTeamApi, OrganizationBundleSocialTeamApiDict
from .social_account import SocialAccount, SocialAccountDict


class Item1BundleSocialTeamApi(SdkBaseModel):
    id: str
    name: str
    avatar_url: OptionalNullable[str] = Field(default=UNSET, alias="avatarUrl")
    organization_id: str = Field(alias="organizationId")
    created_by_id: str = Field(alias="createdById")
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")
    deleted_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="deletedAt")
    organization: OrganizationBundleSocialTeamApi
    created_by: CreatedBy = Field(alias="createdBy")
    bots: list[Bot]
    social_accounts: list[SocialAccount] = Field(alias="socialAccounts")
    bio: OptionalNullable[Bio] = UNSET


class Item1BundleSocialTeamApiDict(TypedDict):
    id: str
    name: str
    avatar_url: NotRequired[str | None]
    organization_id: str
    created_by_id: str
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    deleted_at: NotRequired[RFC3339DateTime | None]
    organization: OrganizationBundleSocialTeamApiDict
    created_by: CreatedByDict
    bots: list[BotDict]
    social_accounts: list[SocialAccountDict]
    bio: NotRequired[BioDict | None]
