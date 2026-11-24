from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Facebook2(SdkBaseModel):
    id: OptionalNullable[str] = UNSET
    post_id: OptionalNullable[str] = Field(default=UNSET, alias="postId")
    video_id: OptionalNullable[str] = Field(default=UNSET, alias="videoId")
    permalink: OptionalNullable[str] = UNSET
    thumbnail: OptionalNullable[str] = UNSET


class Facebook2Dict(TypedDict):
    id: NotRequired[str | None]
    post_id: NotRequired[str | None]
    video_id: NotRequired[str | None]
    permalink: NotRequired[str | None]
    thumbnail: NotRequired[str | None]
