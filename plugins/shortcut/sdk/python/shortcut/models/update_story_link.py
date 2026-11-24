from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.verb_shortcut_story_links_api import VerbShortcutStoryLinksApiOrStr


class UpdateStoryLink(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    verb: Optional[VerbShortcutStoryLinksApiOrStr] = UNSET
    """The type of link."""

    subject_id: Optional[int] = UNSET
    """The ID of the subject Story."""

    object_id: Optional[int] = UNSET
    """The ID of the object Story."""


class UpdateStoryLinkDict(TypedDict):
    verb: NotRequired[VerbShortcutStoryLinksApiOrStr]
    subject_id: NotRequired[int]
    object_id: NotRequired[int]
