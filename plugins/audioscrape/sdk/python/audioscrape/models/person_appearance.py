from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class PersonAppearance(SdkBaseModel):
    episode_id: int
    episode_title: str
    podcast_title: str
    publish_date: OptionalNullable[str] = UNSET


class PersonAppearanceDict(TypedDict):
    episode_id: int
    episode_title: str
    podcast_title: str
    publish_date: NotRequired[str | None]
