from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Googlebusiness2(SdkBaseModel):
    id: OptionalNullable[str] = UNSET
    """Resource name of the Local Post, e.g. 'accounts/{accountId}/locations/{locationId}/localPosts/{postId}'."""

    permalink: OptionalNullable[str] = UNSET
    """Public link to the post (searchUrl) when available."""


class Googlebusiness2Dict(TypedDict):
    id: NotRequired[str | None]
    permalink: NotRequired[str | None]
