from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .matched_event import MatchedEvent, MatchedEventDict
from .matched_meta import MatchedMeta, MatchedMetaDict


class MatchedEnvelope(SdkBaseModel):
    meta: MatchedMeta
    data: list[MatchedEvent]


class MatchedEnvelopeDict(TypedDict):
    meta: MatchedMetaDict
    data: list[MatchedEventDict]
