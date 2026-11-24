from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .pubsub1 import Pubsub1, Pubsub1Dict


class Transport2(SdkBaseModel):
    """Optional. To deliver messages, Eventarc might use other Google Cloud products as a transport intermediary. This
    field contains a reference to that transport intermediary. This information can be used for debugging purposes."""

    pubsub: Optional[Pubsub1] = UNSET
    """The Pub/Sub topic and subscription used by Eventarc as a transport intermediary."""


class Transport2Dict(TypedDict):
    pubsub: NotRequired[Pubsub1Dict]
