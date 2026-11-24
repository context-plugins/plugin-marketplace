from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Reddit(SdkBaseModel):
    sr: str
    """Subreddit name. Example: r/subredditName or u/username"""

    text: str
    description: OptionalNullable[str] = UNSET
    upload_ids: OptionalNullable[list[str]] = Field(default=UNSET, alias="uploadIds")
    link: OptionalNullable[str] = UNSET
    """The URL to which the post will link to."""

    nsfw: bool | None = False
    """Set to true if the post is NSFW."""

    flair_id: OptionalNullable[str] = Field(default=UNSET, alias="flairId")
    """Flair ID for the post. Required if the subreddit requires flair selection."""


class RedditDict(TypedDict):
    sr: str
    text: str
    description: NotRequired[str | None]
    upload_ids: NotRequired[list[str] | None]
    link: NotRequired[str | None]
    nsfw: NotRequired[bool | None]
    flair_id: NotRequired[str | None]
