from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.type_bundle_social_upload_api import TypeBundleSocialUploadApiOrStr


class ApiV1UploadFinalizeResponse(SdkBaseModel):
    id: str
    team_id: OptionalNullable[str] = Field(default=UNSET, alias="teamId")
    organization_id: OptionalNullable[str] = Field(default=UNSET, alias="organizationId")
    icon_url: OptionalNullable[str] = Field(default=UNSET, alias="iconUrl")
    thumbnail_url: OptionalNullable[str] = Field(default=UNSET, alias="thumbnailUrl")
    url: OptionalNullable[str] = UNSET
    external_link: OptionalNullable[str] = Field(default=UNSET, alias="externalLink")
    icon_path: OptionalNullable[str] = Field(default=UNSET, alias="iconPath")
    thumbnail_path: OptionalNullable[str] = Field(default=UNSET, alias="thumbnailPath")
    path: OptionalNullable[str] = UNSET
    type_: TypeBundleSocialUploadApiOrStr = Field(alias="type")
    width: OptionalNullable[float] = UNSET
    height: OptionalNullable[float] = UNSET
    file_size: OptionalNullable[float] = Field(default=UNSET, alias="fileSize")
    video_length: OptionalNullable[float] = Field(default=UNSET, alias="videoLength")
    mime: OptionalNullable[str] = UNSET
    ext: OptionalNullable[str] = UNSET
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")


class ApiV1UploadFinalizeResponseDict(TypedDict):
    id: str
    team_id: NotRequired[str | None]
    organization_id: NotRequired[str | None]
    icon_url: NotRequired[str | None]
    thumbnail_url: NotRequired[str | None]
    url: NotRequired[str | None]
    external_link: NotRequired[str | None]
    icon_path: NotRequired[str | None]
    thumbnail_path: NotRequired[str | None]
    path: NotRequired[str | None]
    type_: TypeBundleSocialUploadApiOrStr
    width: NotRequired[float | None]
    height: NotRequired[float | None]
    file_size: NotRequired[float | None]
    video_length: NotRequired[float | None]
    mime: NotRequired[str | None]
    ext: NotRequired[str | None]
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
