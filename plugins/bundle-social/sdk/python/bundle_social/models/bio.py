from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .item_bundle_social_team_api import ItemBundleSocialTeamApi, ItemBundleSocialTeamApiDict


class Bio(SdkBaseModel):
    id: str
    username: str
    name: str | None
    description: str | None
    avatar_url: str | None = Field(alias="avatarUrl")
    socials: dict[str, str | None] | None
    team_id: str = Field(alias="teamId")
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")
    items: list[ItemBundleSocialTeamApi]


class BioDict(TypedDict):
    id: str
    username: str
    name: str | None
    description: str | None
    avatar_url: str | None
    socials: dict[str, str | None] | None
    team_id: str
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    items: list[ItemBundleSocialTeamApiDict]
