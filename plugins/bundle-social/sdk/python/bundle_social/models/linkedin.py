from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.privacy1 import Privacy1OrStr


class Linkedin(SdkBaseModel):
    text: str
    upload_ids: OptionalNullable[list[str]] = Field(default=UNSET, alias="uploadIds")
    link: OptionalNullable[str] = UNSET
    """Optional URL for LinkedIn article preview post."""

    thumbnail: OptionalNullable[str] = UNSET
    """The URL to image uploaded on bundle.social."""

    media_title: OptionalNullable[str] = Field(default=UNSET, alias="mediaTitle")
    """Title for video or document posts. If not provided for videos, LinkedIn displays the posting date under the
    video."""

    privacy: OptionalNullable[Privacy1OrStr] = UNSET
    hide_from_feed: bool | None = Field(default=False, alias="hideFromFeed")
    """Set to true if the post shouldn't be displayed in the main feed."""

    disable_reshare: bool | None = Field(default=False, alias="disableReshare")
    """Set to true if the post is not allowed to be reshared."""


class LinkedinDict(TypedDict):
    text: str
    upload_ids: NotRequired[list[str] | None]
    link: NotRequired[str | None]
    thumbnail: NotRequired[str | None]
    media_title: NotRequired[str | None]
    privacy: NotRequired[Privacy1OrStr | None]
    hide_from_feed: NotRequired[bool | None]
    disable_reshare: NotRequired[bool | None]
