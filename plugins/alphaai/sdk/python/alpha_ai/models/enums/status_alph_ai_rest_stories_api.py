from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusAlphAiRestStoriesApi(str, Enum):
    """``found``: ``story`` is filled. ``merged``: this story was folded into another one, ``redirect_to`` is its id.
    ``not_a_story``: the id belongs to an article only one publisher carried, ``article`` names it. (An unknown id is a
    404, not a status.)"""

    FOUND = "found"
    MERGED = "merged"
    NOT_A_STORY = "not_a_story"

    __str__ = str.__str__


StatusAlphAiRestStoriesApiOrStr: TypeAlias = Annotated[
    StatusAlphAiRestStoriesApi | str, open_enum_validator(StatusAlphAiRestStoriesApi)
]
