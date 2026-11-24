from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class VideosRequest(SdkBaseModel):
    file_url: Optional[str] = UNSET
    """URL of the video file to upload"""

    title: Optional[str] = UNSET
    """Title of the video"""

    description: Optional[str] = UNSET
    """Description of the video"""

    published: bool = True
    """Whether to publish the video immediately"""


class VideosRequestDict(TypedDict):
    file_url: NotRequired[str]
    title: NotRequired[str]
    description: NotRequired[str]
    published: NotRequired[bool]
