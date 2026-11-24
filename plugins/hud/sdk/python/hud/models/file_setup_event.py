from __future__ import annotations

from typing import Literal

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .file_patch import FilePatch, FilePatchDict


class FileSetupEvent(SdkBaseModel):
    """Workspace changes made by scenario setup before the agent starts."""

    model_config = ConfigDict(extra="forbid")

    id: str
    parent_id: Optional[str] = UNSET
    started_at: Optional[RFC3339DateTime] = UNSET
    ended_at: Optional[RFC3339DateTime] = UNSET
    seq: int = 0
    kind: Literal["file_setup"] = "file_setup"
    files_scanned: int = 0
    files_changed: int = 0
    truncated: bool = False
    patches: Optional[list[FilePatch]] = UNSET


class FileSetupEventDict(TypedDict):
    id: str
    parent_id: NotRequired[str]
    started_at: NotRequired[RFC3339DateTime]
    ended_at: NotRequired[RFC3339DateTime]
    seq: NotRequired[int]
    kind: Literal["file_setup"]
    files_scanned: NotRequired[int]
    files_changed: NotRequired[int]
    truncated: NotRequired[bool]
    patches: NotRequired[list[FilePatchDict]]
