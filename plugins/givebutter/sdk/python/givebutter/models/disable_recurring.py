from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class DisableRecurring(SdkBaseModel):
    """Accepts a ``boolean`` value."""

    name: Literal["disable_recurring"] = "disable_recurring"
    value: OptionalNullable[bool] = UNSET


class DisableRecurringDict(TypedDict):
    name: Literal["disable_recurring"]
    value: NotRequired[bool | None]
