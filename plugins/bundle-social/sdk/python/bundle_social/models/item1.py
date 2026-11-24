from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class Item1(SdkBaseModel):
    id: str
    profile_post_id: str = Field(alias="profilePostId")
    impressions: float
    impressions_unique: float = Field(alias="impressionsUnique")
    views: float
    views_unique: float = Field(alias="viewsUnique")
    likes: float
    dislikes: float
    comments: float
    shares: float
    saves: float
    raw: Optional[Any] = UNSET
    forced: bool
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")
    deleted_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="deletedAt")


class Item1Dict(TypedDict):
    id: str
    profile_post_id: str
    impressions: float
    impressions_unique: float
    views: float
    views_unique: float
    likes: float
    dislikes: float
    comments: float
    shares: float
    saves: float
    raw: NotRequired[Any]
    forced: bool
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    deleted_at: NotRequired[RFC3339DateTime | None]
