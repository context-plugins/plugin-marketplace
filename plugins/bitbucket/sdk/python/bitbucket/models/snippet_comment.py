from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .links1 import Links1, Links1Dict
from .snippet import Snippet, SnippetDict


class SnippetComment(SdkBaseModel):
    """All Of object, snippet_comment."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    links: Optional[Links1] = UNSET
    snippet: Optional[Snippet] = UNSET


class SnippetCommentDict(TypedDict):
    type_: NotRequired[str]
    links: NotRequired[Links1Dict]
    snippet: NotRequired[SnippetDict]
