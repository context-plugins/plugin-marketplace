from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel
from .enums.event_type1 import EventType1, EventType1OrStr
from .unions.changed_output import ChangedOutput, ChangedOutputDict
from .unions.previous_output import PreviousOutput, PreviousOutputDict


class MonitorSnapshotEvent(SdkBaseModel):
    """Snapshot diff event emitted when a monitored task run's output changes.

    ``changed_output`` contains only the fields that changed since the previous execution, along with their ``basis``
    (reasoning + citations). ``previous_output`` holds the complete output from the prior run for comparison."""

    event_id: str
    """Stable identifier for this event. Safe to use for client-side deduplication across pagination and retries."""

    event_group_id: str
    """ID of the event group that owns this event."""

    event_date: str
    """Date when this event was produced. ISO 8601 date (YYYY-MM-DD) or partial (YYYY-MM or YYYY)."""

    event_type: EventType1OrStr = EventType1.SNAPSHOT
    """Discriminant for the snapshot event variant."""

    changed_output: ChangedOutput
    """Partial output containing only the fields that changed since the previous execution, each with its ``basis``
    (reasoning and citations)."""

    previous_output: PreviousOutput
    """The full output from the prior run, including all fields and basis."""


class MonitorSnapshotEventDict(TypedDict):
    event_id: str
    event_group_id: str
    event_date: str
    event_type: NotRequired[EventType1OrStr]
    changed_output: ChangedOutputDict
    previous_output: PreviousOutputDict
