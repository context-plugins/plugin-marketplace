from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel


class Bot(SdkBaseModel):
    id: str
    name: str
    avatar_url: OptionalNullable[str] = Field(default=UNSET, alias="avatarUrl")
    team_id: str = Field(alias="teamId")
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")
    deleted_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="deletedAt")


class BotDict(TypedDict):
    id: str
    name: str
    avatar_url: NotRequired[str | None]
    team_id: str
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    deleted_at: NotRequired[RFC3339DateTime | None]
