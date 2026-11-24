from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class Item3(SdkBaseModel):
    id: str
    profile_post_id: OptionalNullable[str] = Field(default=UNSET, alias="profilePostId")
    analytics_id: OptionalNullable[str] = Field(default=UNSET, alias="analyticsId")
    raw: Optional[Any] = UNSET
    forced: bool
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")
    deleted_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="deletedAt")


class Item3Dict(TypedDict):
    id: str
    profile_post_id: NotRequired[str | None]
    analytics_id: NotRequired[str | None]
    raw: NotRequired[Any]
    forced: bool
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    deleted_at: NotRequired[RFC3339DateTime | None]
