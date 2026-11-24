from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .pubsub1 import Pubsub1, Pubsub1Dict


class Transport(SdkBaseModel):
    """Represents the transport intermediaries created for the trigger to deliver events."""

    pubsub: Optional[Pubsub1] = UNSET
    """The Pub/Sub topic and subscription used by Eventarc as a transport intermediary."""


class TransportDict(TypedDict):
    pubsub: NotRequired[Pubsub1Dict]
