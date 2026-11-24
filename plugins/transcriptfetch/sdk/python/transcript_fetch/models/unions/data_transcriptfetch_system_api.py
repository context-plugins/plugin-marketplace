from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..me_data import MeData, MeDataDict
from ..transcript_data import TranscriptData, TranscriptDataDict
from ..video_list_data import VideoListData, VideoListDataDict

DataTranscriptfetchSystemApi: TypeAlias = Annotated[
    (
        Annotated[TranscriptData, Tag("transcript")]
        | Annotated[VideoListData, Tag("video_list")]
        | Annotated[MeData, Tag("me")]
    ),
    WireDiscriminator("kind"),
]

DataTranscriptfetchSystemApiDict: TypeAlias = TranscriptDataDict | VideoListDataDict | MeDataDict
