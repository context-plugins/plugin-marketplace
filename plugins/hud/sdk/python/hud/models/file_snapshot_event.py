from __future__ import annotations

from typing import Literal

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .file_manifest_entry import FileManifestEntry, FileManifestEntryDict


class FileSnapshotEvent(SdkBaseModel):
    """A post-setup workspace manifest of paths + hashes captured before the agent starts.

    Emitted as ``filetracking.snapshot`` under ``hud.filetracking.v1``.

    Build source plus :class:``FileSetupEvent`` patches derive this state; applying subsequent
    :class:``FileChangeEvent`` patches reconstructs the agent timeline."""

    model_config = ConfigDict(extra="forbid")

    id: str
    parent_id: Optional[str] = UNSET
    started_at: Optional[RFC3339DateTime] = UNSET
    ended_at: Optional[RFC3339DateTime] = UNSET
    seq: int = 0
    kind: Literal["file_snapshot"] = "file_snapshot"
    files_scanned: int = 0
    truncated: bool = False
    files: Optional[list[FileManifestEntry]] = UNSET


class FileSnapshotEventDict(TypedDict):
    id: str
    parent_id: NotRequired[str]
    started_at: NotRequired[RFC3339DateTime]
    ended_at: NotRequired[RFC3339DateTime]
    seq: NotRequired[int]
    kind: Literal["file_snapshot"]
    files_scanned: NotRequired[int]
    truncated: NotRequired[bool]
    files: NotRequired[list[FileManifestEntryDict]]
