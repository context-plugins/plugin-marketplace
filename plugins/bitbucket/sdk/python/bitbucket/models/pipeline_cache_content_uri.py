from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PipelineCacheContentUri(SdkBaseModel):
    """A representation of the location of pipeline cache content."""

    uri: Optional[str] = UNSET
    """The uri for pipeline cache content."""


class PipelineCacheContentUriDict(TypedDict):
    uri: NotRequired[str]
