from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.media_type_instagram_graph_publishing_api import MediaTypeInstagramGraphPublishingApiOrStr
from .user_tag import UserTag, UserTagDict


class CreateContainerRequest(SdkBaseModel):
    image_url: Optional[str] = UNSET
    """Public URL of the image to publish."""

    video_url: Optional[str] = UNSET
    """Public URL of the video to publish."""

    caption: Optional[str] = UNSET
    """Caption text for the media."""

    media_type: Optional[MediaTypeInstagramGraphPublishingApiOrStr] = UNSET
    """Type of media to publish."""

    is_carousel_item: Optional[bool] = UNSET
    """Set to true if this is an item in a carousel."""

    location_id: Optional[str] = UNSET
    """Facebook Page ID of a location to tag."""

    user_tags: Optional[list[UserTag]] = UNSET
    """Users to tag in the media."""

    access_token: Optional[str] = UNSET


class CreateContainerRequestDict(TypedDict):
    image_url: NotRequired[str]
    video_url: NotRequired[str]
    caption: NotRequired[str]
    media_type: NotRequired[MediaTypeInstagramGraphPublishingApiOrStr]
    is_carousel_item: NotRequired[bool]
    location_id: NotRequired[str]
    user_tags: NotRequired[list[UserTagDict]]
    access_token: NotRequired[str]
