from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PhotosRequest(SdkBaseModel):
    url: Optional[str] = UNSET
    """URL of the photo to upload"""

    caption: Optional[str] = UNSET
    """Caption for the photo"""

    published: bool = True
    """Whether to publish the photo immediately"""


class PhotosRequestDict(TypedDict):
    url: NotRequired[str]
    caption: NotRequired[str]
    published: NotRequired[bool]
