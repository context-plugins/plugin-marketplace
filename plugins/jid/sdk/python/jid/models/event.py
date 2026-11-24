from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Event(SdkBaseModel):
    id: Optional[str] = UNSET
    occurred_at: Optional[str] = UNSET
    kind: Optional[str] = UNSET
    predicate: OptionalNullable[str] = UNSET
    old_value: Optional[Any] = UNSET
    new_value: Optional[Any] = UNSET
    source: OptionalNullable[str] = UNSET
    summary: Optional[str] = UNSET


class EventDict(TypedDict):
    id: NotRequired[str]
    occurred_at: NotRequired[str]
    kind: NotRequired[str]
    predicate: NotRequired[str | None]
    old_value: NotRequired[Any]
    new_value: NotRequired[Any]
    source: NotRequired[str | None]
    summary: NotRequired[str]
