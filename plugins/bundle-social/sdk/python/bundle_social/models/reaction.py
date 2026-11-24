from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel


class Reaction(SdkBaseModel):
    sender_id: str = Field(alias="senderId")
    reaction: OptionalNullable[str] = UNSET
    emoji: OptionalNullable[str] = UNSET
    reacted_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="reactedAt")


class ReactionDict(TypedDict):
    sender_id: str
    reaction: NotRequired[str | None]
    emoji: NotRequired[str | None]
    reacted_at: NotRequired[RFC3339DateTime | None]
