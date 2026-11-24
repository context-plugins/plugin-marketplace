from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.verb_shortcut_story_links_api import VerbShortcutStoryLinksApiOrStr


class CreateStoryLink(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    verb: VerbShortcutStoryLinksApiOrStr
    """The type of link."""

    subject_id: int
    """The ID of the subject Story."""

    object_id: int
    """The ID of the object Story."""


class CreateStoryLinkDict(TypedDict):
    verb: VerbShortcutStoryLinksApiOrStr
    subject_id: int
    object_id: int
