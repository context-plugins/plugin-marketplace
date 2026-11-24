from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.call_to_action_type import CallToActionTypeOrStr


class AdCreativeCreate(SdkBaseModel):
    name: str
    object_story_spec: Any
    """Story specification including page, link, and media data"""

    title: Optional[str] = UNSET
    body: Optional[str] = UNSET
    call_to_action_type: Optional[CallToActionTypeOrStr] = UNSET
    url_tags: Optional[str] = UNSET


class AdCreativeCreateDict(TypedDict):
    name: str
    object_story_spec: Any
    title: NotRequired[str]
    body: NotRequired[str]
    call_to_action_type: NotRequired[CallToActionTypeOrStr]
    url_tags: NotRequired[str]
