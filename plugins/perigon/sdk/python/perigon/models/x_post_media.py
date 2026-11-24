from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .x_post_media_item import XPostMediaItem, XPostMediaItemDict


class XPostMedia(SdkBaseModel):
    photo: OptionalNullable[list[XPostMediaItem]] = UNSET
    video: OptionalNullable[list[XPostMediaItem]] = UNSET


class XPostMediaDict(TypedDict):
    photo: NotRequired[list[XPostMediaItemDict] | None]
    video: NotRequired[list[XPostMediaItemDict] | None]
