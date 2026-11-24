from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SendMessageResponse(SdkBaseModel):
    id: Optional[str] = UNSET
    status: Optional[str] = UNSET
    cost: Optional[float] = UNSET
    segments: Optional[int] = UNSET
    idempotency_replay: Optional[bool] = Field(default=UNSET, alias="idempotencyReplay")
    """True when this response replays an earlier request with the same idempotency key."""


class SendMessageResponseDict(TypedDict):
    id: NotRequired[str]
    status: NotRequired[str]
    cost: NotRequired[float]
    segments: NotRequired[int]
    idempotency_replay: NotRequired[bool]
