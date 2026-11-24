from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.event import EventOrStr
from .vehicle import Vehicle, VehicleDict
from .vehicle1 import Vehicle1, Vehicle1Dict


class VehicleChangeEvent(SdkBaseModel):
    sequence: int
    event_id: str
    event: EventOrStr
    terminal: bool
    """True only for terminal outcomes such as sold, not sold or removed."""

    reason: OptionalNullable[str] = UNSET
    vehicle: Vehicle1
    changed_fields: list[str]
    """Canonical field paths changed by this event."""

    before: Any
    after: Any
    vehicle_updated_at: OptionalNullable[RFC3339DateTime] = UNSET
    recorded_at: RFC3339DateTime
    record: OptionalNullable[Vehicle] = UNSET
    """Optional current full normalized vehicle record returned when include_record=true. May be null for deleted
    records."""


class VehicleChangeEventDict(TypedDict):
    sequence: int
    event_id: str
    event: EventOrStr
    terminal: bool
    reason: NotRequired[str | None]
    vehicle: Vehicle1Dict
    changed_fields: list[str]
    before: Any
    after: Any
    vehicle_updated_at: NotRequired[RFC3339DateTime | None]
    recorded_at: RFC3339DateTime
    record: NotRequired[VehicleDict | None]
