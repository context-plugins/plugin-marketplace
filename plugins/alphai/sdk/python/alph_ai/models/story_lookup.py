from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.status_alph_ai_rest_stories_api import StatusAlphAiRestStoriesApiOrStr
from .story import Story, StoryDict
from .story_article_ref import StoryArticleRef, StoryArticleRefDict


class StoryLookup(SdkBaseModel):
    """What a story id resolves to. Exactly one of ``story``, ``redirect_to`` and ``article`` is filled, according to
    ``status``."""

    status: StatusAlphAiRestStoriesApiOrStr
    """``found``: ``story`` is filled. ``merged``: this story was folded into another one, ``redirect_to`` is its id.
    ``not_a_story``: the id belongs to an article only one publisher carried, ``article`` names it. (An unknown id is a
    404, not a status.)"""

    story: OptionalNullable[Story] = UNSET
    redirect_to: OptionalNullable[str] = UNSET
    """The surviving story's id, when ``status`` is ``merged``."""

    article: OptionalNullable[StoryArticleRef] = UNSET
    """The single-publisher article the id belongs to, when ``status`` is ``not_a_story``."""


class StoryLookupDict(TypedDict):
    status: StatusAlphAiRestStoriesApiOrStr
    story: NotRequired[StoryDict | None]
    redirect_to: NotRequired[str | None]
    article: NotRequired[StoryArticleRefDict | None]
