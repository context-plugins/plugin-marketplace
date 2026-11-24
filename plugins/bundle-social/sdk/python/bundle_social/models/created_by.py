from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.role import RoleOrStr


class CreatedBy(SdkBaseModel):
    id: str
    external_id: str = Field(alias="externalId")
    email: str
    email_verified: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="emailVerified")
    first_name: OptionalNullable[str] = Field(default=UNSET, alias="firstName")
    last_name: OptionalNullable[str] = Field(default=UNSET, alias="lastName")
    avatar_url: OptionalNullable[str] = Field(default=UNSET, alias="avatarUrl")
    timezone: OptionalNullable[str] = UNSET
    role: RoleOrStr
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")
    deleted_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="deletedAt")


class CreatedByDict(TypedDict):
    id: str
    external_id: str
    email: str
    email_verified: NotRequired[RFC3339DateTime | None]
    first_name: NotRequired[str | None]
    last_name: NotRequired[str | None]
    avatar_url: NotRequired[str | None]
    timezone: NotRequired[str | None]
    role: RoleOrStr
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    deleted_at: NotRequired[RFC3339DateTime | None]
