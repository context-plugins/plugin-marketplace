from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.status import StatusOrStr


class ItemBundleSocialPostApi(SdkBaseModel):
    id: str
    title: str
    post_date: RFC3339DateTime | None = Field(alias="postDate")
    status: StatusOrStr
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")


class ItemBundleSocialPostApiDict(TypedDict):
    id: str
    title: str
    post_date: RFC3339DateTime | None
    status: StatusOrStr
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
