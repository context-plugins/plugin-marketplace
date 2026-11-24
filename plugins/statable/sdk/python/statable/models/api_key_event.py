from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.event import EventOrStr


class ApiKeyEvent(SdkBaseModel):
    event: EventOrStr
    ip: OptionalNullable[str] = UNSET
    user_agent: OptionalNullable[str] = UNSET
    created_at: RFC3339DateTime
    actor_key_id: OptionalNullable[int] = UNSET
    """The API key that performed the action; null = the dashboard."""


class ApiKeyEventDict(TypedDict):
    event: EventOrStr
    ip: NotRequired[str | None]
    user_agent: NotRequired[str | None]
    created_at: RFC3339DateTime
    actor_key_id: NotRequired[int | None]
