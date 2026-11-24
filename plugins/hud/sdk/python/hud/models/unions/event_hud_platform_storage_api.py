from __future__ import annotations

from typing import TypeAlias

from ..file_capture_event import FileCaptureEvent, FileCaptureEventDict
from ..file_change_event import FileChangeEvent, FileChangeEventDict
from ..file_setup_event import FileSetupEvent, FileSetupEventDict
from ..file_snapshot_event import FileSnapshotEvent, FileSnapshotEventDict

EventHudPlatformStorageApi: TypeAlias = FileSnapshotEvent | FileSetupEvent | FileChangeEvent | FileCaptureEvent

EventHudPlatformStorageApiDict: TypeAlias = (
    FileSnapshotEventDict | FileSetupEventDict | FileChangeEventDict | FileCaptureEventDict
)
