from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .upload1 import Upload1, Upload1Dict


class Upload(SdkBaseModel):
    post_id: str = Field(alias="postId")
    upload_id: str = Field(alias="uploadId")
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")
    deleted_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="deletedAt")
    upload: Upload1


class UploadDict(TypedDict):
    post_id: str
    upload_id: str
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    deleted_at: NotRequired[RFC3339DateTime | None]
    upload: Upload1Dict
