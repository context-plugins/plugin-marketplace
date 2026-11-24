from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .entity_ref import EntityRef, EntityRefDict
from .episode_full import EpisodeFull, EpisodeFullDict
from .podcast_ref2 import PodcastRef2, PodcastRef2Dict
from .transcript import Transcript, TranscriptDict


class EpisodeDetail(SdkBaseModel):
    entities: list[EntityRef]
    episode: EpisodeFull
    podcast: OptionalNullable[PodcastRef2] = UNSET
    transcript: OptionalNullable[Transcript] = UNSET


class EpisodeDetailDict(TypedDict):
    entities: list[EntityRefDict]
    episode: EpisodeFullDict
    podcast: NotRequired[PodcastRef2Dict | None]
    transcript: NotRequired[TranscriptDict | None]
