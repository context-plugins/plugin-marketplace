from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class EnableEventReminders(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["enable_event_reminders"] = "enable_event_reminders"
    value: OptionalNullable[bool] = UNSET


class EnableEventRemindersDict(TypedDict):
    name: Literal["enable_event_reminders"]
    value: NotRequired[bool | None]
