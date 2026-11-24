from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Metadata(SdkBaseModel):
    allow_images: OptionalNullable[bool] = Field(default=UNSET, alias="allowImages")
    allow_videos: OptionalNullable[bool] = Field(default=UNSET, alias="allowVideos")
    allow_galleries: OptionalNullable[bool] = Field(default=UNSET, alias="allowGalleries")
    link_flair_enabled: OptionalNullable[bool] = Field(default=UNSET, alias="linkFlairEnabled")
    facebook_page_id: OptionalNullable[str] = Field(default=UNSET, alias="facebookPageId")


class MetadataDict(TypedDict):
    allow_images: NotRequired[bool | None]
    allow_videos: NotRequired[bool | None]
    allow_galleries: NotRequired[bool | None]
    link_flair_enabled: NotRequired[bool | None]
    facebook_page_id: NotRequired[str | None]
