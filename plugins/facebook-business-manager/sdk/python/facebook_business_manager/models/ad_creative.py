from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.call_to_action_type1 import CallToActionType1OrStr


class AdCreative(SdkBaseModel):
    id: Optional[str] = UNSET
    """The ID of the ad creative"""

    name: Optional[str] = UNSET
    """The name of the ad creative"""

    object_story_spec: Optional[Any] = UNSET
    """Specification for the story that will appear in the ad, including page ID, link data, and media."""

    title: Optional[str] = UNSET
    """The title of the ad"""

    body: Optional[str] = UNSET
    """The body text of the ad"""

    image_url: Optional[str] = UNSET
    """URL of the ad image"""

    call_to_action_type: Optional[CallToActionType1OrStr] = UNSET
    """The call-to-action button type"""

    link_url: Optional[str] = UNSET
    """Destination URL for the ad"""

    url_tags: Optional[str] = UNSET
    """URL tags for tracking parameters"""


class AdCreativeDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    object_story_spec: NotRequired[Any]
    title: NotRequired[str]
    body: NotRequired[str]
    image_url: NotRequired[str]
    call_to_action_type: NotRequired[CallToActionType1OrStr]
    link_url: NotRequired[str]
    url_tags: NotRequired[str]
