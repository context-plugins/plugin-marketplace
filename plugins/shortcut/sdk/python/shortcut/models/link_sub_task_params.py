from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class LinkSubTaskParams(SdkBaseModel):
    story_id: int
    """The ID of the story to link as a sub-task of the parent story"""


class LinkSubTaskParamsDict(TypedDict):
    story_id: int
