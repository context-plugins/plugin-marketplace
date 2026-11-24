from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .queued_message import QueuedMessage, QueuedMessageDict
from .steering_cutoff import SteeringCutoff, SteeringCutoffDict


class QueueListResponse(SdkBaseModel):
    queue: list[QueuedMessage]
    steering_cutoffs: Optional[list[SteeringCutoff]] = Field(default=UNSET, alias="steeringCutoffs")


class QueueListResponseDict(TypedDict):
    queue: list[QueuedMessageDict]
    steering_cutoffs: NotRequired[list[SteeringCutoffDict]]
