from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PostMetadata1(SdkBaseModel):
    """The metadata to use for this post. If not provided, the default value will be used."""

    default_description: Optional[str] = UNSET
    default_title: Optional[str] = UNSET
    og_description: Optional[str] = UNSET
    og_title: Optional[str] = UNSET
    twitter_description: Optional[str] = UNSET
    twitter_title: Optional[str] = UNSET


class PostMetadata1Dict(TypedDict):
    default_description: NotRequired[str]
    default_title: NotRequired[str]
    og_description: NotRequired[str]
    og_title: NotRequired[str]
    twitter_description: NotRequired[str]
    twitter_title: NotRequired[str]
