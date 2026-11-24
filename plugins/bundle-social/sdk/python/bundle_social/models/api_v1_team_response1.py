from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel


class ApiV1TeamResponse1(SdkBaseModel):
    id: str
    name: str
    avatar_url: OptionalNullable[str] = Field(default=UNSET, alias="avatarUrl")
    organization_id: str = Field(alias="organizationId")
    created_by_id: str = Field(alias="createdById")
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")
    deleted_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="deletedAt")


class ApiV1TeamResponse1Dict(TypedDict):
    id: str
    name: str
    avatar_url: NotRequired[str | None]
    organization_id: str
    created_by_id: str
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    deleted_at: NotRequired[RFC3339DateTime | None]
