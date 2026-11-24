from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..monitor_completion_event import MonitorCompletionEvent, MonitorCompletionEventDict
from ..monitor_error_event import MonitorErrorEvent, MonitorErrorEventDict
from ..monitor_event_stream_event import MonitorEventStreamEvent, MonitorEventStreamEventDict
from ..monitor_snapshot_event import MonitorSnapshotEvent, MonitorSnapshotEventDict

Event: TypeAlias = Annotated[
    (
        Annotated[MonitorEventStreamEvent, Tag("event_stream")]
        | Annotated[MonitorSnapshotEvent, Tag("snapshot")]
        | Annotated[MonitorCompletionEvent, Tag("completion")]
        | Annotated[MonitorErrorEvent, Tag("error")]
    ),
    WireDiscriminator("event_type"),
]

EventDict: TypeAlias = (
    MonitorEventStreamEventDict | MonitorSnapshotEventDict | MonitorCompletionEventDict | MonitorErrorEventDict
)
