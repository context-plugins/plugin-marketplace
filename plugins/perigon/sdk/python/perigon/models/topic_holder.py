from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class TopicHolder(SdkBaseModel):
    """Topics most strongly associated with the story."""

    name: OptionalNullable[str] = UNSET
    """Topic assigned to the article."""


class TopicHolderDict(TypedDict):
    name: NotRequired[str | None]
