from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.privacy3 import Privacy3OrStr


class Mastodon(SdkBaseModel):
    text: OptionalNullable[str] = UNSET
    upload_ids: OptionalNullable[list[str]] = Field(default=UNSET, alias="uploadIds")
    thumbnail: OptionalNullable[str] = UNSET
    """The URL to image uploaded on bundle.social."""

    privacy: OptionalNullable[Privacy3OrStr] = UNSET
    spoiler: OptionalNullable[str] = UNSET


class MastodonDict(TypedDict):
    text: NotRequired[str | None]
    upload_ids: NotRequired[list[str] | None]
    thumbnail: NotRequired[str | None]
    privacy: NotRequired[Privacy3OrStr | None]
    spoiler: NotRequired[str | None]
