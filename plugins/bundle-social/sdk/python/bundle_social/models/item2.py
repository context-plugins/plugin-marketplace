from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class Item2(SdkBaseModel):
    id: str
    social_account_id: OptionalNullable[str] = Field(default=UNSET, alias="socialAccountId")
    analytics_id: OptionalNullable[str] = Field(default=UNSET, alias="analyticsId")
    raw: Optional[Any] = UNSET
    forced: bool
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")
    deleted_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="deletedAt")


class Item2Dict(TypedDict):
    id: str
    social_account_id: NotRequired[str | None]
    analytics_id: NotRequired[str | None]
    raw: NotRequired[Any]
    forced: bool
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    deleted_at: NotRequired[RFC3339DateTime | None]
