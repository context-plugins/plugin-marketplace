from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PostsPreviewData(SdkBaseModel):
    preview_url: str
    """A URL to the post's preview in the beehiiv app, parameterized by the given audience simulation. Requires a
    beehiiv session with access to the publication."""


class PostsPreviewDataDict(TypedDict):
    preview_url: str
