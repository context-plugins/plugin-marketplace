from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Attendee(SdkBaseModel):
    email: OptionalNullable[str] = UNSET


class AttendeeDict(TypedDict):
    email: NotRequired[str | None]
