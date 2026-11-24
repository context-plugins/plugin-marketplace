from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.status1 import Status1OrStr
from .enums.type5 import Type5OrStr


class Snapchat2(SdkBaseModel):
    id: OptionalNullable[str] = UNSET
    media_id: OptionalNullable[str] = Field(default=UNSET, alias="mediaId")
    media_ids: OptionalNullable[list[str]] = Field(default=UNSET, alias="mediaIds")
    type_: OptionalNullable[Type5OrStr] = Field(default=UNSET, alias="type")
    profile_id: OptionalNullable[str] = Field(default=UNSET, alias="profileId")
    source_upload_id: OptionalNullable[str] = Field(default=UNSET, alias="sourceUploadId")
    source_upload_ids: OptionalNullable[list[str]] = Field(default=UNSET, alias="sourceUploadIds")
    media_uploaded_at: OptionalNullable[str] = Field(default=UNSET, alias="mediaUploadedAt")
    """When the media ids were uploaded; Snap expires them after 24h."""

    permalink: OptionalNullable[str] = UNSET
    status: OptionalNullable[Status1OrStr] = UNSET


class Snapchat2Dict(TypedDict):
    id: NotRequired[str | None]
    media_id: NotRequired[str | None]
    media_ids: NotRequired[list[str] | None]
    type_: NotRequired[Type5OrStr | None]
    profile_id: NotRequired[str | None]
    source_upload_id: NotRequired[str | None]
    source_upload_ids: NotRequired[list[str] | None]
    media_uploaded_at: NotRequired[str | None]
    permalink: NotRequired[str | None]
    status: NotRequired[Status1OrStr | None]
