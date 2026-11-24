from __future__ import annotations

from typing import Literal

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .file_patch import FilePatch, FilePatchDict


class FileChangeEvent(SdkBaseModel):
    """A workspace diff captured between steps.

    Projected from ``filetracking.diff`` under ``hud.filetracking.v1``: the files that changed since the previous scan.

    Interleaves with tool/agent events by ``seq``/time; correlate to the step timeline by ``started_at``. ``truncated``
    marks a big diff capped over the per-scan budget (e.g. an ``npm install`` / ``git checkout``)."""

    model_config = ConfigDict(extra="forbid")

    id: str
    parent_id: Optional[str] = UNSET
    started_at: Optional[RFC3339DateTime] = UNSET
    ended_at: Optional[RFC3339DateTime] = UNSET
    seq: int = 0
    kind: Literal["file_change"] = "file_change"
    files_scanned: int = 0
    files_changed: int = 0
    truncated: bool = False
    patches: Optional[list[FilePatch]] = UNSET


class FileChangeEventDict(TypedDict):
    id: str
    parent_id: NotRequired[str]
    started_at: NotRequired[RFC3339DateTime]
    ended_at: NotRequired[RFC3339DateTime]
    seq: NotRequired[int]
    kind: Literal["file_change"]
    files_scanned: NotRequired[int]
    files_changed: NotRequired[int]
    truncated: NotRequired[bool]
    patches: NotRequired[list[FilePatchDict]]
