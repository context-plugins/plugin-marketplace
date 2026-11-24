from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Sports(SdkBaseModel):
    events: int
    last_seen: OptionalNullable[str] = UNSET
    """The last instant this venue and sport was read (ISO-8601 Z); null when not known."""


class SportsDict(TypedDict):
    events: int
    last_seen: NotRequired[str | None]
