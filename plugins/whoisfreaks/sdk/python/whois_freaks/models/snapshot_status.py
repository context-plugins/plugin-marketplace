from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SnapshotStatus(SdkBaseModel):
    status: Optional[str] = UNSET
    snapshot_creation_date: Optional[str] = UNSET
    snapshot_name: Optional[str] = UNSET
    snapshot_deletion_time: Optional[str] = UNSET
    message: Optional[str] = UNSET


class SnapshotStatusDict(TypedDict):
    status: NotRequired[str]
    snapshot_creation_date: NotRequired[str]
    snapshot_name: NotRequired[str]
    snapshot_deletion_time: NotRequired[str]
    message: NotRequired[str]
