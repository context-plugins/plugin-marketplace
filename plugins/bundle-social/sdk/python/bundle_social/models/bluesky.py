from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.label import LabelOrStr


class Bluesky(SdkBaseModel):
    text: OptionalNullable[str] = UNSET
    upload_ids: OptionalNullable[list[str]] = Field(default=UNSET, alias="uploadIds")
    tags: OptionalNullable[list[str]] = UNSET
    """Extra hashtags (without #), up to 8."""

    labels: OptionalNullable[list[LabelOrStr]] = UNSET
    """Self-labels (content warnings) applied to the post."""

    quote_uri: Optional[str] = Field(default=UNSET, alias="quoteUri")
    """AT-URI of the post to quote (e.g. at://did.../app.bsky.feed.post/<rkey>)."""

    external_url: OptionalNullable[str] = Field(default=UNSET, alias="externalUrl")
    """Target URL for the external link card"""

    external_title: OptionalNullable[str] = Field(default=UNSET, alias="externalTitle")
    """Card title for the external link card"""

    external_description: OptionalNullable[str] = Field(default=UNSET, alias="externalDescription")
    """Card description for the external link card"""

    thumbnail: OptionalNullable[str] = UNSET
    """This should be URL to publicly available image uploaded to bundle.social account."""

    video_alt: OptionalNullable[str] = Field(default=UNSET, alias="videoAlt")
    """Alt text for the video embed."""


class BlueskyDict(TypedDict):
    text: NotRequired[str | None]
    upload_ids: NotRequired[list[str] | None]
    tags: NotRequired[list[str] | None]
    labels: NotRequired[list[LabelOrStr] | None]
    quote_uri: NotRequired[str]
    external_url: NotRequired[str | None]
    external_title: NotRequired[str | None]
    external_description: NotRequired[str | None]
    thumbnail: NotRequired[str | None]
    video_alt: NotRequired[str | None]
