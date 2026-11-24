from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .raw_event import RawEvent, RawEventDict
from .raw_meta import RawMeta, RawMetaDict


class RawEnvelope(SdkBaseModel):
    meta: RawMeta
    data: list[RawEvent]


class RawEnvelopeDict(TypedDict):
    meta: RawMetaDict
    data: list[RawEventDict]
